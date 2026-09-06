import Link from "next/link";
import {useTranslation} from "next-i18next";
import {BsArrowUpRight} from "react-icons/bs";
import Reveal from "../motion/Reveal";
import {TOP_CITIES} from "../../lib/cities";

/** Compact internal-link block that hands PageRank to the city landing pages. */
export default function Cities() {
    const {t} = useTranslation("common");
    return (
        <section id="cities" className="bg-white py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-6">
                <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="eyebrow">{t("cities.eyebrow")}</p>
                        <h2 className="mt-4 max-w-2xl font-semibold leading-[1.02] tracking-display text-[clamp(1.9rem,4.2vw,3.5rem)]">
                            {t("cities.title")}
                        </h2>
                        <p className="mt-4 max-w-xl text-lg text-ink-2">{t("cities.sub")}</p>
                    </div>
                    <Link href="/webdesign" className="group inline-flex items-center gap-2 self-start rounded-full bg-paper px-5 py-2.5 text-sm font-medium hairline transition hover:card-shadow">
                        {t("cities.all")}
                        <BsArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
                    </Link>
                </Reveal>
                <Reveal delay={0.05} className="mt-8 flex flex-wrap gap-2">
                    {TOP_CITIES.map((c) => (
                        <Link key={c.slug} href={`/webdesign/${c.slug}`}
                              className="rounded-full bg-paper px-4 py-2 text-sm font-medium hairline transition hover:bg-ink hover:text-white">
                            {c.name}
                        </Link>
                    ))}
                </Reveal>
            </div>
        </section>
    )
}
