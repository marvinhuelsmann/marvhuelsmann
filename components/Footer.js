import Link from "next/link";
import {useTranslation} from "next-i18next";
import {AiFillLinkedin, AiOutlineInstagram} from "react-icons/ai";
import {BsArrowUpRight} from "react-icons/bs";
import {RiTwitterXFill, RiGithubFill} from "react-icons/ri";
import Logo from "./Logo";
import LocaleMenu from "./layout/LocaleMenu";

export const SOCIALS = [
    {name: "GitHub", href: "https://github.com/marvinhuelsmann", Icon: RiGithubFill},
    {name: "LinkedIn", href: "https://www.linkedin.com/in/marvin-hülsmann-9892201b5/", Icon: AiFillLinkedin},
    {name: "Instagram", href: "https://www.instagram.com/marvhuelsmann", Icon: AiOutlineInstagram},
    {name: "X", href: "https://twitter.com/marvhuelsmann?s=20", Icon: RiTwitterXFill},
];

export default function Footer() {
    const {t} = useTranslation("common");
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-black/5 bg-paper">
            <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
                <div className="grid gap-12 md:grid-cols-12">
                    <div className="md:col-span-5">
                        <Link href="/" className="inline-flex items-center gap-3 text-ink">
                            <Logo className="h-7 w-auto"/>
                            <span className="text-lg font-semibold tracking-tight">Marvin Hülsmann</span>
                        </Link>
                        <p className="mt-4 max-w-xs text-ink-2">{t("footer.tagline")}</p>
                        <div className="mt-6 flex gap-2">
                            {SOCIALS.map(({name, href, Icon}) => (
                                <a
                                    key={name}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={name}
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink hairline transition hover:-translate-y-0.5 hover:card-shadow"
                                >
                                    <Icon className="h-5 w-5"/>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <p className="eyebrow">{t("footer.nav")}</p>
                        <ul className="mt-4 space-y-2.5 text-ink">
                            <li><Link className="transition hover:text-coral" href="/">{t("nav.home")}</Link></li>
                            <li><Link className="transition hover:text-coral" href="/#projects">{t("nav.projects")}</Link></li>
                            <li><Link className="transition hover:text-coral" href="/work">{t("nav.work")}</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <p className="eyebrow">{t("footer.contact")}</p>
                        <ul className="mt-4 space-y-2.5 text-ink">
                            <li><a className="transition hover:text-coral" href="mailto:mail@marvhuelsmann.com">mail@marvhuelsmann.com</a></li>
                            <li><a className="transition hover:text-coral" href="tel:+491711109101">+49 171 1109101</a></li>
                            <li><a className="transition hover:text-coral" href="https://cal.com/marvin-hulsmann-rjtji3/30min" target="_blank" rel="noreferrer">cal.com/marvin</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <p className="eyebrow">{t("footer.legal")}</p>
                        <address className="mt-4 not-italic text-ink-2 leading-relaxed">
                            Wöhlertstraße 21<br/>
                            10115 Berlin, Germany<br/>
                            <span className="text-ink-3">{t("vatid")}: DE 353408902</span>
                        </address>
                        <a
                            className="group mt-3 inline-flex items-center gap-1.5 text-sm text-ink-2 transition hover:text-coral"
                            href="https://www.mhcreations.de/legal/thirdparty"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {t("footer.legal.details")}
                            <BsArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
                        </a>
                    </div>
                </div>

                <div className="mt-14 flex flex-col gap-4 border-t border-black/5 pt-6 text-sm text-ink-3 sm:flex-row sm:items-center sm:justify-between">
                    <p>© {year} Marvin Hülsmann</p>
                    <div className="flex items-center gap-2">
                        <span>{t("footer.language")}</span>
                        <LocaleMenu align="top end"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}
