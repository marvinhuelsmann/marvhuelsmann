import {useTranslation} from "next-i18next";
import {BsArrowUpRight} from "react-icons/bs";
import Reveal from "../motion/Reveal";
import AppleText from "../AppleText";

const STUDIO_URL = "https://mhcreations.de";

/**
 * Client work runs through the studio, so /work stays short and hands
 * visitors over to mhcreations.de instead of repeating its content.
 */
export function Studio() {
    const {t} = useTranslation("common");
    const chips = [t("work.studio.chip.web"), t("work.studio.chip.apps"), t("work.studio.chip.design")];

    return (
        <section className="relative bg-paper py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-6">
                <Reveal>
                    <a
                        href={STUDIO_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="spotlight group relative block overflow-hidden rounded-[2.25rem] bg-surface p-8 card-shadow transition-[translate] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 sm:rounded-[2.75rem] sm:p-12 lg:p-16"
                    >
                        {/* studio light */}
                        <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,90,60,0.35),transparent_70%)] opacity-70 transition-opacity duration-700 group-hover:opacity-100"/>
                        <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 left-[20%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,179,64,0.16),transparent_70%)]"/>

                        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
                            <div className="max-w-2xl">
                                <p className="eyebrow">{t("work.studio.eyebrow")}</p>
                                <h2 className="mt-4 font-semibold leading-[0.95] tracking-display text-silver text-[clamp(2.6rem,6.5vw,5.75rem)]">
                                    MH Creations<span className="text-accent">.</span>
                                </h2>
                                <p className="mt-6 text-lg leading-snug text-ink-2 sm:text-xl">{t("work.studio.text")}</p>
                                <ul className="mt-7 flex flex-wrap gap-2">
                                    {chips.map((c) => (
                                        <li key={c} className="rounded-full bg-white/[0.05] px-4 py-2 text-sm font-medium text-ink hairline">
                                            <AppleText>{c}</AppleText>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <span className="inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-ink py-2 pl-6 pr-2 text-base font-medium text-black transition group-hover:bg-white lg:self-auto">
                                {t("work.studio.cta")}
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-transform duration-500 group-hover:rotate-45">
                                    <BsArrowUpRight className="h-4 w-4"/>
                                </span>
                            </span>
                        </div>
                    </a>
                </Reveal>
            </div>
        </section>
    )
}
