import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {useTranslation} from "next-i18next";
import Logo from "../Logo";
import LocaleMenu from "./LocaleMenu";

const EASE = [0.22, 1, 0.36, 1];
/** Tailwind's sm breakpoint – below it the bar docks to the bottom of the screen. */
const MOBILE = "(max-width: 639px)";

/**
 * On phones the bar sits at the bottom and stays out of the way until the first
 * section is behind you; from sm up it is the pill at the top of the page.
 */
function useDock(asPath) {
    const [ready, setReady] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [passedFirst, setPassedFirst] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia(MOBILE);
        const sync = () => setIsMobile(mq.matches);
        sync();
        setReady(true);
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

    return {isMobile, visible: ready && (!isMobile || passedFirst)};
}

export default function Nav() {
    const router = useRouter();
    const {t} = useTranslation("common");
    const [scrolled, setScrolled] = useState(false);
    const {isMobile, visible} = useDock(router.asPath);

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
        <motion.header
            initial={{y: -24, opacity: 0}}
            animate={{y: visible ? 0 : (isMobile ? 112 : -24), opacity: visible ? 1 : 0}}
            transition={{duration: 0.7, ease: EASE}}
            className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:bottom-auto sm:top-0 sm:pb-0 sm:pt-4"
        >
            <nav
                className={`flex items-center gap-0.5 rounded-full p-1.5 transition-all duration-500
                ${visible ? "pointer-events-auto" : "pointer-events-none"}
                ${scrolled || isMobile ? "glass card-shadow" : "bg-transparent border border-transparent"}`}
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
                <LocaleMenu align={isMobile ? "top end" : "bottom end"}/>
            </nav>
        </motion.header>
    )
}
