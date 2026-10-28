import {useEffect, useRef} from "react";
import * as THREE from "three";

/**
 * Drifting motes of light, like dust caught in the glow of a laptop screen.
 * One draw call: every particle is animated in the vertex shader. The field
 * leans away from the cursor and lights up around it, follows the pointer with
 * a slow camera parallax and only renders while the hero is on screen.
 */

const VERT = /* glsl */`
    uniform float uTime;
    uniform float uPixelRatio;
    uniform vec2 uMouse;
    uniform float uMouseStrength;
    uniform float uHeight;
    uniform vec4 uRipples[4]; // xy = origin, z = start time, w = strength
    attribute float aSeed;
    attribute float aSize;
    attribute vec3 aColor;
    varying float vAlpha;
    varying vec3 vColor;

    void main() {
        vec3 p = position;
        float t = uTime * (0.35 + aSeed * 0.25);

        // slow upward float, wrapped so the field never empties
        p.y = mod(p.y + uTime * (0.12 + aSeed * 0.18) + uHeight * 0.5, uHeight) - uHeight * 0.5;
        // lazy, organic sway
        p.x += sin(t + aSeed * 31.0) * 0.35 + sin(t * 0.37 + p.y * 0.6) * 0.25;
        p.z += cos(t * 0.8 + aSeed * 17.0) * 0.3;

        // the cursor parts the dust (strongest for motes near the focal plane)
        vec2 d = p.xy - uMouse;
        float dist = length(d);
        float near = 1.0 - smoothstep(0.0, 2.6, dist);
        float depth = 1.0 - smoothstep(0.0, 5.0, abs(p.z));
        p.xy += normalize(d + 0.0001) * near * depth * 0.9 * uMouseStrength;

        // click shockwaves: a ring races outwards, shoving and lighting every mote it passes
        float wave = 0.0;
        for (int i = 0; i < 4; i++) {
            vec4 r = uRipples[i];
            float age = uTime - r.z;
            if (r.w <= 0.0 || age < 0.0 || age > 3.2) continue;
            vec2 rd = p.xy - r.xy;
            float rl = length(rd);
            float radius = age * 6.5;
            float band = exp(-pow((rl - radius) / (0.55 + age * 0.35), 2.0));
            float life = (1.0 - smoothstep(0.0, 3.2, age)) * r.w;
            p.xy += normalize(rd + 0.0001) * band * life * 0.85;
            p.z += band * life * 0.6;
            wave += band * life;
        }

        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = aSize * uPixelRatio * (14.0 / -mv.z) * (1.0 + near * depth * 0.8 * uMouseStrength + wave * 1.4);

        float twinkle = 0.65 + 0.35 * sin(uTime * (1.2 + aSeed * 2.0) + aSeed * 50.0);
        float edge = smoothstep(uHeight * 0.5, uHeight * 0.32, abs(p.y));
        vAlpha = twinkle * edge * (0.35 + near * depth * 0.9 * uMouseStrength + wave * 2.2) * smoothstep(2.0, 5.0, -mv.z);
        vColor = aColor;
    }
`;

const FRAG = /* glsl */`
    varying float vAlpha;
    varying vec3 vColor;
    void main() {
        vec2 c = gl_PointCoord - 0.5;
        float r = length(c);
        float glow = smoothstep(0.5, 0.0, r);
        glow = pow(glow, 2.2);
        if (glow < 0.01) discard;
        gl_FragColor = vec4(vColor, glow * vAlpha);
    }
`;

const PALETTE = [
    [1.0, 1.0, 1.0],
    [0.86, 0.9, 1.0],   // screen-light blue
    [0.75, 0.82, 1.0],
    [1.0, 0.55, 0.42],  // coral spark
    [1.0, 0.78, 0.45],  // amber spark
];

function buildGeometry(count, width, height) {
    const pos = new Float32Array(count * 3);
    const seed = new Float32Array(count);
    const size = new Float32Array(count);
    const color = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
        // denser around the centre, where the screen light falls
        const g = (Math.random() + Math.random() + Math.random()) / 3 - 0.5;
        pos[i * 3] = g * width * 1.6;
        pos[i * 3 + 1] = (Math.random() - 0.5) * height;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 9 - 1;
        seed[i] = Math.random();
        size[i] = 1 + Math.pow(Math.random(), 4) * 5;
        const roll = Math.random();
        const c = roll > 0.96 ? PALETTE[3] : roll > 0.92 ? PALETTE[4] : PALETTE[Math.floor(Math.random() * 3)];
        color.set(c, i * 3);
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("aSeed", new THREE.BufferAttribute(seed, 1));
    geo.setAttribute("aSize", new THREE.BufferAttribute(size, 1));
    geo.setAttribute("aColor", new THREE.BufferAttribute(color, 3));
    return geo;
}

export default function LightField({className = "", onRipple}) {
    const host = useRef(null);
    const rippleCb = useRef(onRipple);
    rippleCb.current = onRipple;

    useEffect(() => {
        const el = host.current;
        if (!el) return;

        let renderer;
        try {
            renderer = new THREE.WebGLRenderer({antialias: false, alpha: true, powerPreference: "low-power"});
        } catch {
            return; // no WebGL – the photo carries the hero on its own
        }

        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const small = window.matchMedia("(max-width: 767px)").matches;
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

        renderer.setPixelRatio(dpr);
        renderer.setClearColor(0x000000, 0);
        renderer.domElement.style.width = "100%";
        renderer.domElement.style.height = "100%";
        renderer.domElement.style.display = "block";
        el.appendChild(renderer.domElement);

        // a lost GPU context (sleep, driver reset) just stops the effect instead of throwing
        const onLost = (e) => { e.preventDefault(); stop(); };
        renderer.domElement.addEventListener("webglcontextlost", onLost);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 60);
        camera.position.set(0, 0, 10);

        const HEIGHT = 12;
        const geo = buildGeometry(small ? 450 : 1100, 16, HEIGHT);
        const uniforms = {
            uTime: {value: 0},
            uPixelRatio: {value: dpr},
            uMouse: {value: new THREE.Vector2(99, 99)},
            uMouseStrength: {value: 0},
            uHeight: {value: HEIGHT},
            uRipples: {value: Array.from({length: 4}, () => new THREE.Vector4(0, 0, -99, 0))},
        };
        const mat = new THREE.ShaderMaterial({
            vertexShader: VERT,
            fragmentShader: FRAG,
            uniforms,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
        });
        const points = new THREE.Points(geo, mat);
        scene.add(points);

        // ── sizing
        let halfW = 1, halfH = 1;
        const resize = () => {
            const w = el.clientWidth || 1, h = el.clientHeight || 1;
            renderer.setSize(w, h, false);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            halfH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z;
            halfW = halfH * camera.aspect;
        };
        resize();
        const ro = new ResizeObserver(resize);
        ro.observe(el);

        // ── pointer
        const target = {x: 99, y: 99, nx: 0, ny: 0, active: 0};
        const onPointer = (e) => {
            const r = el.getBoundingClientRect();
            const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
            const ny = -(((e.clientY - r.top) / r.height) * 2 - 1);
            target.nx = nx;
            target.ny = ny;
            target.x = nx * halfW;
            target.y = ny * halfH;
            target.active = Math.abs(nx) <= 1 && Math.abs(ny) <= 1 ? 1 : 0;
        };
        const onLeave = () => { target.active = 0; };

        // every click on the empty hero sends a shockwave through the field
        let rippleIndex = 0;
        const onDown = (e) => {
            if (e.button !== 0 || e.target.closest?.("a,button,input,textarea,select,[role=menu]")) return;
            const r = el.getBoundingClientRect();
            if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) return;
            const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
            const ny = -(((e.clientY - r.top) / r.height) * 2 - 1);
            uniforms.uRipples.value[rippleIndex].set(nx * halfW, ny * halfH, uniforms.uTime.value, 1);
            rippleIndex = (rippleIndex + 1) % 4;
            if (reduced) renderer.render(scene, camera);
            rippleCb.current?.(e.clientX, e.clientY);
        };
        window.addEventListener("pointerdown", onDown, {passive: true});
        window.addEventListener("pointermove", onPointer, {passive: true});
        document.documentElement.addEventListener("pointerleave", onLeave);

        // ── loop, paused when off screen or in a background tab
        const clock = new THREE.Clock();
        let raf = 0, visible = true, elapsed = 0;
        const mouse = uniforms.uMouse.value;

        const frame = () => {
            raf = requestAnimationFrame(frame);
            elapsed += Math.min(clock.getDelta(), 0.05);
            uniforms.uTime.value = elapsed;

            mouse.x += (target.x - mouse.x) * 0.08;
            mouse.y += (target.y - mouse.y) * 0.08;
            uniforms.uMouseStrength.value += (target.active - uniforms.uMouseStrength.value) * 0.05;

            camera.position.x += (target.nx * 0.6 - camera.position.x) * 0.03;
            camera.position.y += (target.ny * 0.35 - camera.position.y) * 0.03;
            camera.lookAt(0, 0, 0);
            points.rotation.y = Math.sin(elapsed * 0.05) * 0.08;

            renderer.render(scene, camera);
        };
        const start = () => { if (!raf && visible && !document.hidden) { clock.getDelta(); frame(); } };
        const stop = () => { cancelAnimationFrame(raf); raf = 0; };

        let io;
        if (reduced) {
            uniforms.uTime.value = 4;
            renderer.render(scene, camera);
        } else {
            io = new IntersectionObserver(([entry]) => {
                visible = entry.isIntersecting;
                visible ? start() : stop();
            });
            io.observe(el);
            start();
        }
        const onVisibility = () => (document.hidden ? stop() : start());
        document.addEventListener("visibilitychange", onVisibility);

        // fade the canvas in once the first frames are on screen
        requestAnimationFrame(() => el.setAttribute("data-ready", ""));

        return () => {
            stop();
            io?.disconnect();
            ro.disconnect();
            window.removeEventListener("pointermove", onPointer);
            window.removeEventListener("pointerdown", onDown);
            document.documentElement.removeEventListener("pointerleave", onLeave);
            document.removeEventListener("visibilitychange", onVisibility);
            geo.dispose();
            mat.dispose();
            renderer.dispose();
            renderer.domElement.remove();
        };
    }, []);

    return (
        <div
            ref={host}
            aria-hidden="true"
            className={`opacity-0 transition-opacity duration-[2000ms] data-[ready]:opacity-100 ${className}`}
        />
    );
}
