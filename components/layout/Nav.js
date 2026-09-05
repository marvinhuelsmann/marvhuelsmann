import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {useTranslation} from "next-i18next";
import Logo from "../Logo";
import LocaleMenu from "./LocaleMenu";

const EASE = [0.22, 1, 0.36, 1];
/** Tailwind's sm breakpoint – below it the bar moves to the bottom while scrolling. */
const MOBILE = "(max-width: 639px)";

/**
 * On phones the bar starts at the top and hands over to a dock above the home
 * indicator once the first section is behind you; from sm up it never moves.
 */
function useDock(asPath) {
    const [isMobile, setIsMobile] = useState(false);
    const [passedFirst, setPassedFirst] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia(MOBILE);
        const sync = () => setIsMobile(mq.matches);
        sync();
        mq.addEventListener("change", sync);
        return () => mq.removeEventListener("change", sync);
    }, []);

    useEffect(() => {
        if (!isMobile) return;
        const onScroll = () => {
            const first = document.querySelector("main > section");
            const height = first ? first.offsetHeight : window.innerHeight;
            setPassedFirst(window.scrollY > Math.max(160, height - 96));
        };
        onScroll();
        window.addEventListener("scroll", onScroll, {passive: true});
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, [isMobile, asPath]);

    return isMobile && passedFirst;
}

export default function Nav() {
    const router = useRouter();
    const {t} = useTranslation("common");
    const [scrolled, setScrolled] = useState(false);
    const docked = useDock(router.asPath);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, {passive: true});
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const links = [
        {href: "/", label: t("nav.home"), active: router.pathname === "/"},
        {href: "/#projects", label: t("nav.projects"), active: false, hideOnMobile: true},
        {href: "/work", label: t("nav.work"), active: router.pathname === "/work"},
    ];

    return (
        <AnimatePresence mode="wait">
            <motion.header
                key={docked ? "dock" : "top"}
                initial={{opacity: 0, y: docked ? 16 : -24}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0}}
                transition={{duration: docked ? 0.45 : 0.7, ease: EASE}}
                className={`pointer-events-none fixed inset-x-0 z-50 flex justify-center px-3
                ${docked
                    ? "bottom-0 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
                    : "top-0 pt-3 sm:pt-4"}`}
            >
                <nav
                    className={`pointer-events-auto flex items-center gap-0.5 rounded-full p-1.5 transition-all duration-500
                    ${scrolled || docked ? "glass card-shadow" : "bg-transparent border border-transparent"}`}
                >
                    <Link
                        href="/"
                        className="mr-0.5 flex h-9 items-center gap-2 rounded-full px-2.5 text-ink transition hover:bg-black/5 sm:mr-1 sm:px-3"
                        aria-label="Marvin Hülsmann – Home"
                    >
                        <Logo className="h-[18px] w-auto"/>
                        <span className="hidden text-sm font-semibold tracking-tight sm:inline">Marvin Hülsmann</span>
                    </Link>

                    <div className="mx-0.5 hidden h-5 w-px bg-black/10 sm:block"/>

                    {links.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className={`relative rounded-full px-2.5 py-1.5 text-[13px] font-medium transition sm:px-3 sm:text-sm
                            ${l.hideOnMobile ? "hidden sm:inline-block" : ""}
                            ${l.active ? "bg-ink text-white" : "text-ink hover:bg-black/5"}`}
                        >
                            {l.label}
                        </Link>
                    ))}

                    <div className="mx-0.5 h-5 w-px bg-black/10"/>
                    <LocaleMenu align={docked ? "top end" : "bottom end"}/>
                </nav>
            </motion.header>
        </AnimatePresence>
    )
}
