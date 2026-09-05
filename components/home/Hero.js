import Image from "next/image";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import {AnimatePresence, motion, useScroll, useTransform} from "framer-motion";
import {useTranslation} from "next-i18next";
import {BsArrowRight, BsArrowDown} from "react-icons/bs";
import HeroImage from "../../public/StandUpMarvin2.jpeg";

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
                    initial={{y: "100%", opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    exit={{y: "-100%", opacity: 0}}
                    transition={{duration: 0.5, ease: EASE}}
                    className="inline-block font-serif italic text-accent"
                >
                    {HELLO[i]}
                </motion.span>
            </AnimatePresence>
        </span>
    )
}

export default function Hero() {
    const {t} = useTranslation("common");
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({target: ref, offset: ["start start", "end start"]});
    const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
    const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
    const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    return (
        <section ref={ref} className="relative overflow-hidden pt-32 pb-20 sm:pt-40 md:min-h-[100svh] md:pb-24">
            {/* atmosphere */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-64 left-[8%] h-[46rem] w-[46rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,90,60,0.16),transparent_70%)] animate-float-slow"/>
                <div className="absolute -right-32 top-[20%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,179,64,0.18),transparent_70%)] animate-float"/>
                <div className="absolute -bottom-40 left-[30%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(90,200,250,0.14),transparent_70%)]"/>
            </div>

            <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12 lg:gap-8">
                <motion.div style={{y: textY, opacity: fade}} className="will-change-transform lg:col-span-7">
                    <motion.p
                        initial={{opacity: 0, y: 16}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, ease: EASE, delay: 0.2}}
                        className="text-2xl text-ink-2 sm:text-3xl"
                    >
                        <HelloWord/>
                    </motion.p>

                    <h1 className="mt-3 font-semibold leading-[0.92] tracking-display text-[clamp(3.4rem,11vw,9.75rem)]">
                        {["Marvin", "Hülsmann"].map((w, idx) => (
                            <span key={w} className="block overflow-hidden">
                                <motion.span
                                    initial={{y: "105%"}}
                                    animate={{y: 0}}
                                    transition={{duration: 1, ease: EASE, delay: 0.3 + idx * 0.1}}
                                    className="block"
                                >
                                    {w}{idx === 1 && <span className="text-accent">.</span>}
                                </motion.span>
                            </span>
                        ))}
                    </h1>

                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.9, ease: EASE, delay: 0.6}}
                        className="mt-8 max-w-xl text-xl leading-snug text-ink-2 sm:text-2xl"
                    >
                        {t("hero.tagline")}
                    </motion.p>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.9, ease: EASE, delay: 0.75}}
                        className="mt-10 flex flex-wrap items-center gap-3"
                    >
                        <Link
                            href="/work"
                            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-base font-medium text-white transition hover:bg-black hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.5)]"
                        >
                            {t("hero.cta.work")}
                            <BsArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/>
                        </Link>
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-medium text-ink hairline transition hover:bg-white/70 hover:card-shadow"
                        >
                            {t("hero.cta.projects")}
                        </a>
                    </motion.div>
                </motion.div>

                <div className="relative lg:col-span-5">
                    <motion.div
                        initial={{opacity: 0, scale: 0.94, y: 30}}
                        animate={{opacity: 1, scale: 1, y: 0}}
                        transition={{duration: 1.2, ease: EASE, delay: 0.35}}
                        className="relative mx-auto w-full max-w-md lg:max-w-none"
                    >
                        <motion.div
                            style={{y: imgY}}
                            className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] card-shadow-lg will-change-transform"
                        >
                            <motion.div style={{scale: imgScale}} className="absolute inset-0 will-change-transform">
                                <Image
                                    src={HeroImage}
                                    alt="Marvin Hülsmann im Apple Park, WWDC24"
                                    fill
                                    priority
                                    placeholder="blur"
                                    sizes="(min-width: 1024px) 40vw, (min-width: 640px) 60vw, 92vw"
                                    className="object-cover object-[50%_20%]"
                                />
                            </motion.div>
                            <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-black/10"/>
                        </motion.div>

                    </motion.div>
                </div>
            </div>

            <motion.a
                href="#about"
                style={{opacity: fade}}
                className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-sm text-ink-3 md:flex"
            >
                {t("hero.scroll")}
                <BsArrowDown className="h-4 w-4 animate-bounce"/>
            </motion.a>
        </section>
    )
}
