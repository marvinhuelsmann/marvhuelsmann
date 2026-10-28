import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import {useCallback, useEffect, useRef, useState} from "react";
import {AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform} from "framer-motion";
import {useTranslation} from "next-i18next";
import {BsArrowRight, BsArrowDown} from "react-icons/bs";
import HeroImage from "../../public/MarvinLaptop.jpg";

// WebGL only runs in the browser and never blocks the first paint.
const LightField = dynamic(() => import("./LightField"), {ssr: false});

const HELLO = ["Guten Tag", "Hi", "Bonjour", "Hej", "Ciao", "Tach", "Hăo", "Moinsen", "こんにちは", "Hello", "Salut", "Olá", "Merhaba", "Shalom", "გამარჯობა"];
const EASE = [0.22, 1, 0.36, 1];

function HelloWord() {
    const [i, setI] = useState(0);
    useEffect(() => {
        const id = setInterval(() => setI((n) => (n + 1) % HELLO.length), 2200);
        return () => clearInterval(id);
    }, []);
    return (
        <span className="relative inline-block h-[1.2em] overflow-hidden align-bottom">
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={HELLO[i]}
                    initial={{y: "100%", opacity: 0, filter: "blur(6px)"}}
                    animate={{y: 0, opacity: 1, filter: "blur(0px)"}}
                    exit={{y: "-100%", opacity: 0, filter: "blur(6px)"}}
                    transition={{duration: 0.5, ease: EASE}}
                    className="inline-block font-serif italic text-accent"
                >
                    {HELLO[i]}
                </motion.span>
            </AnimatePresence>
        </span>
    )
}

/** Thin rings that bloom where the visitor clicks, on top of the WebGL shockwave. */
function useClickRings() {
    const [rings, setRings] = useState([]);
    const add = useCallback((x, y) => {
        const id = Math.random().toString(36).slice(2);
        setRings((r) => [...r.slice(-3), {id, x, y}]);
        setTimeout(() => setRings((r) => r.filter((ring) => ring.id !== id)), 1400);
    }, []);
    return [rings, add];
}

export default function Hero() {
    const {t} = useTranslation("common");
    const ref = useRef(null);
    const [rings, addRing] = useClickRings();

    // scroll: text lifts away, photo settles back into the dark
    const {scrollYProgress} = useScroll({target: ref, offset: ["start start", "end start"]});
    const textY = useTransform(scrollYProgress, [0, 1], [0, -120]);
    const fade = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
    const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
    const photoDim = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);

    // pointer: the photo drifts a few pixels in depth
    const px = useMotionValue(0);
    const py = useMotionValue(0);
    const sx = useSpring(px, {stiffness: 60, damping: 20, mass: 0.6});
    const sy = useSpring(py, {stiffness: 60, damping: 20, mass: 0.6});
    const photoX = useTransform(sx, (v) => v * -14);
    const photoY = useTransform(sy, (v) => v * -10);

    useEffect(() => {
        if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
        const onMove = (e) => {
            px.set(e.clientX / window.innerWidth - 0.5);
            py.set(e.clientY / window.innerHeight - 0.5);
        };
        window.addEventListener("pointermove", onMove, {passive: true});
        return () => window.removeEventListener("pointermove", onMove);
    }, [px, py]);

    const onRipple = useCallback((x, y) => {
        const r = ref.current?.getBoundingClientRect();
        if (r) addRing(x - r.left, y - r.top);
    }, [addRing]);

    return (
        <section
            ref={ref}
            className="relative isolate h-[100svh] min-h-[44rem] overflow-hidden bg-black text-ink select-none"
        >
            {/* ── the photo ─────────────────────────────────────────── */}
            <motion.div
                style={{opacity: photoDim}}
                className="hero-photo absolute left-1/2 top-0 h-[64%] w-full -translate-x-1/2
                           sm:h-[70%] lg:left-auto lg:right-[-3%] lg:top-auto lg:bottom-0 lg:h-[96%] lg:w-auto lg:translate-x-0 lg:aspect-[1433/1098]"
            >
                <motion.div
                    initial={{opacity: 0, scale: 1.06}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 1.8, ease: EASE}}
                    className="absolute inset-0"
                >
                    <motion.div style={{x: photoX, y: photoY, scale: photoScale}} className="absolute inset-0 will-change-transform">
                        <Image
                            src={HeroImage}
                            alt="Marvin Hülsmann am MacBook"
                            fill
                            priority
                            placeholder="blur"
                            sizes="(min-width: 1024px) 70vw, 100vw"
                            className="object-cover object-[53%_35%] lg:object-contain lg:object-bottom"
                        />
                        {/* screen light flickering on the face */}
                        <div aria-hidden="true" className="screen-light absolute left-[53%] top-[40%] h-[34%] w-[26%] -translate-x-1/2 -translate-y-1/2 rounded-full"/>
                        {/* the logo on the lid breathes */}
                        <div aria-hidden="true" className="apple-glow absolute left-[48.6%] top-[78%] h-[13%] w-[10%] -translate-x-1/2 -translate-y-1/2 rounded-full"/>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* ── light field, in front of the photo like dust in the room ── */}
            <LightField onRipple={onRipple} className="pointer-events-none absolute inset-0 z-10 mix-blend-screen"/>

            {/* click rings */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
                <AnimatePresence>
                    {rings.map((r) => (
                        <motion.span
                            key={r.id}
                            initial={{scale: 0, opacity: 0.55}}
                            animate={{scale: 1, opacity: 0}}
                            exit={{opacity: 0}}
                            transition={{duration: 1.3, ease: [0.16, 1, 0.3, 1]}}
                            style={{left: r.x, top: r.y}}
                            className="absolute -ml-[22rem] -mt-[22rem] h-[44rem] w-[44rem] rounded-full border border-white/40 shadow-[0_0_60px_rgba(255,255,255,0.12),inset_0_0_60px_rgba(255,255,255,0.08)]"
                        />
                    ))}
                </AnimatePresence>
            </div>

            {/* ── top meta line: just the coordinates ─────────────── */}
            <motion.div
                style={{opacity: fade}}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1, delay: 1}}
                className="absolute inset-x-0 top-[5.25rem] z-20 hidden sm:block"
            >
                <div className="mx-auto max-w-7xl px-6 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
                    52.5200° N · 13.4050° E
                </div>
            </motion.div>

            {/* ── copy ──────────────────────────────────────────────── */}
            <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-[max(2.75rem,env(safe-area-inset-bottom))] lg:justify-center lg:pb-0">
                <motion.div style={{y: textY, opacity: fade}} className="max-w-[40rem] will-change-transform">
                    <motion.p
                        initial={{opacity: 0, y: 16}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, ease: EASE, delay: 0.5}}
                        className="text-xl text-ink-2 sm:text-3xl"
                    >
                        <HelloWord/>
                    </motion.p>

                    <h1 className="mt-2 font-semibold leading-[0.9] tracking-display text-[clamp(3.4rem,8.6vw,8.25rem)]">
                        {["Marvin", "Hülsmann"].map((w, idx) => (
                            <span key={w} className="block overflow-hidden pb-[0.06em]">
                                <motion.span
                                    initial={{y: "105%"}}
                                    animate={{y: 0}}
                                    transition={{duration: 1.1, ease: EASE, delay: 0.6 + idx * 0.1}}
                                    className="block text-silver"
                                >
                                    {w}{idx === 1 && <span className="text-accent">.</span>}
                                </motion.span>
                            </span>
                        ))}
                    </h1>

                    <motion.p
                        initial={{opacity: 0, y: 20, filter: "blur(8px)"}}
                        animate={{opacity: 1, y: 0, filter: "blur(0px)"}}
                        transition={{duration: 1, ease: EASE, delay: 0.95}}
                        className="mt-6 max-w-md text-lg leading-snug text-ink-2 sm:mt-8 sm:text-xl"
                    >
                        {t("hero.tagline")}
                    </motion.p>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.9, ease: EASE, delay: 1.1}}
                        className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10"
                    >
                        <Link
                            href="/work"
                            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-base font-medium text-black transition hover:bg-white hover:shadow-[0_0_40px_-6px_rgba(255,255,255,0.45)]"
                        >
                            {t("hero.cta.work")}
                            <BsArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/>
                        </Link>
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-base font-medium text-ink transition hover:bg-white/10"
                        >
                            {t("hero.cta.projects")}
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* bottom fade into the page + scroll cue */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-black to-transparent"/>
            <motion.a
                href="#about"
                style={{opacity: fade}}
                className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-2 text-sm text-ink-3 transition hover:text-ink md:flex lg:left-auto lg:right-6 lg:translate-x-0"
            >
                {t("hero.scroll")}
                <BsArrowDown className="h-4 w-4 animate-bounce"/>
            </motion.a>
        </section>
    )
}
