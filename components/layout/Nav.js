import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {useTranslation} from "next-i18next";
import Logo from "../Logo";
import LocaleMenu from "./LocaleMenu";

export default function Nav() {
    const router = useRouter();
    const {t} = useTranslation("common");
    const [scrolled, setScrolled] = useState(false);

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
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1}}
            className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:pt-4"
        >
            <nav
                className={`pointer-events-auto flex items-center gap-0.5 rounded-full p-1.5 transition-all duration-500
                ${scrolled ? "glass card-shadow" : "bg-transparent border border-transparent"}`}
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
                <LocaleMenu/>
            </nav>
        </motion.header>
    )
}
