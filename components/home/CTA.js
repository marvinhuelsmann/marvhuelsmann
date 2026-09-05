import Link from "next/link";
import {useTranslation} from "next-i18next";
import {BsArrowRight} from "react-icons/bs";
import Reveal from "../motion/Reveal";
import Emoji from "../Emoji";
import EmailEmoji from "../../style/icons/EmailEmoji.png";
import MemoEmoji from "../../style/icons/MemoEmoji.png";

export default function CTA() {
    const {t} = useTranslation("common");
    return (
        <section className="relative overflow-hidden bg-ink text-white grain">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,90,60,0.28),transparent_70%)] animate-float-slow"/>
                <div className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,179,64,0.22),transparent_70%)]"/>
                <div className="absolute -left-40 top-0 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(closest-side,rgba(191,90,242,0.18),transparent_70%)]"/>
            </div>

            <div className="relative mx-auto max-w-7xl px-6 py-28 text-center sm:py-36 md:py-48">
                <Reveal>
                    <p className="eyebrow !text-white/50">{t("cta.eyebrow")}</p>
                    <h2 className="mx-auto mt-6 max-w-5xl font-semibold leading-[0.96] tracking-display text-[clamp(2.6rem,8vw,7.5rem)]">
                        {t("cta.title.1")}{" "}
                        <span className="font-serif font-normal italic text-accent">{t("cta.title.2")}</span>
                    </h2>
                    <p className="mx-auto mt-8 max-w-2xl text-lg text-white/65 sm:text-xl">{t("cta.sub")}</p>
                </Reveal>

                <Reveal delay={0.15} className="mt-12 flex flex-wrap items-center justify-center gap-3">
                    <Link
                        href="/work"
                        className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-medium text-ink transition hover:bg-paper"
                    >
                        {t("cta.work")}
                        <BsArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/>
                    </Link>
                    <a
                        href="mailto:kontakt@marvhuelsmann.com"
                        className="inline-flex items-center gap-2 rounded-full glass-dark px-6 py-3.5 text-base font-medium text-white transition hover:bg-white/15"
                    >
                        <Emoji src={EmailEmoji} className="h-5"/> {t("cta.mail")}
                    </a>
                    <a
                        href="https://cal.com/marvin-hulsmann-rjtji3/30min"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full glass-dark px-6 py-3.5 text-base font-medium text-white transition hover:bg-white/15"
                    >
                        <Emoji src={MemoEmoji} className="h-5"/> {t("cta.meeting")}
                    </a>
                </Reveal>
            </div>
        </section>
    )
}
