import {useEffect} from "react";

/**
 * Apple-style hand-off from a full-screen hero to the next section:
 * the first downward gesture inside the hero glides the page to `targetId`,
 * the first upward gesture at the top of that section glides back to the hero.
 * Everywhere else the page scrolls natively.
 *
 * Desktop: wheel, trackpad and keyboard are animated with our own easing.
 * Touch: a gentle CSS proximity snap (see `.hero-snap` in global.css) keeps
 * native momentum scrolling intact.
 */

const DURATION = 950;
const COOLDOWN = 420; // swallows trackpad inertia after the glide
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export default function useHeroSnap(targetId) {
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const root = document.documentElement;
        root.classList.add("hero-snap");

        const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
        if (!fine) return () => root.classList.remove("hero-snap");

        let locked = false;
        let raf = 0;

        const targetTop = () => {
            const el = document.getElementById(targetId);
            return el ? Math.round(el.getBoundingClientRect().top + window.scrollY) : null;
        };

        const glide = (to) => {
            const from = window.scrollY;
            if (Math.abs(to - from) < 2) return;
            locked = true;
            const start = performance.now();
            const step = (now) => {
                const p = Math.min(1, (now - start) / DURATION);
                window.scrollTo({top: from + (to - from) * ease(p), behavior: "instant"});
                if (p < 1) raf = requestAnimationFrame(step);
                else setTimeout(() => { locked = false; }, COOLDOWN);
            };
            raf = requestAnimationFrame(step);
        };

        /** "down" | "up" when a gesture in this direction should glide, otherwise null. */
        const decide = (down) => {
            const top = targetTop();
            if (top == null) return null;
            const y = window.scrollY;
            if (down && y < top - 4) return top;          // anywhere inside the hero
            if (!down && y > 4 && y <= top + 4) return 0; // resting at the top of the next section
            return null;
        };

        const onWheel = (e) => {
            if (e.ctrlKey) return; // pinch-zoom
            if (locked) { e.preventDefault(); return; }
            if (Math.abs(e.deltaY) < 4 || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
            const to = decide(e.deltaY > 0);
            if (to == null) return;
            e.preventDefault();
            glide(to);
        };

        const KEYS_DOWN = new Set(["ArrowDown", "PageDown", " "]);
        const KEYS_UP = new Set(["ArrowUp", "PageUp"]);
        const onKey = (e) => {
            if (e.defaultPrevented || e.altKey || e.metaKey || e.ctrlKey) return;
            const tag = document.activeElement?.tagName;
            if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || document.activeElement?.isContentEditable) return;
            const down = KEYS_DOWN.has(e.key) && !e.shiftKey;
            const up = KEYS_UP.has(e.key) || (e.key === " " && e.shiftKey);
            if (!down && !up) return;
            if (locked) { e.preventDefault(); return; }
            const to = decide(down);
            if (to == null) return;
            e.preventDefault();
            glide(to);
        };

        window.addEventListener("wheel", onWheel, {passive: false});
        window.addEventListener("keydown", onKey);
        return () => {
            cancelAnimationFrame(raf);
            root.classList.remove("hero-snap");
            window.removeEventListener("wheel", onWheel);
            window.removeEventListener("keydown", onKey);
        };
    }, [targetId]);
}
