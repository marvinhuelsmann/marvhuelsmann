import Link from "next/link";
import {useRouter} from "next/router";
import {motion} from "framer-motion";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import {BsArrowRight, BsArrowUpRight} from "react-icons/bs";
import Layout from "../../components/layout/Layout";
import Reveal, {Stagger, Item} from "../../components/motion/Reveal";
import {CITIES, citiesByState} from "../../lib/cities";
import {graph, personSchema, businessSchema, websiteSchema, breadcrumbSchema} from "../../lib/schema";
import {localizedUrl} from "../../lib/site";

const EASE = [0.22, 1, 0.36, 1];

export async function getStaticProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "cities"])),
        },
    }
}

export default function WebdesignHub() {
    const {t} = useTranslation("cities");
    const {locale} = useRouter();
    const groups = citiesByState();

    const jsonLd = graph(
        websiteSchema(locale),
        personSchema(locale),
        businessSchema(locale),
        breadcrumbSchema([
            {name: t("breadcrumb.home"), path: "/"},
            {name: t("breadcrumb.hub"), path: "/webdesign"},
        ], locale),
        {
            "@type": "ItemList",
            name: t("hub.title.1") + " " + t("hub.title.2"),
            numberOfItems: CITIES.length,
            itemListElement: CITIES.map((c, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: c.name,
                url: localizedUrl(`/webdesign/${c.slug}`, locale),
            })),
        },
    );

    return (
        <Layout title={t("hub.meta.title")} description={t("hub.meta.description")} jsonLd={jsonLd} xDefault="de">
            <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 md:pb-20">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute -top-56 right-[10%] h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,179,64,0.2),transparent_70%)] animate-float-slow"/>
                    <div className="absolute -left-40 top-[30%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,90,60,0.16),transparent_70%)] animate-float"/>
                </div>
                <div className="mx-auto max-w-7xl px-6">
                    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ink-3">
                        <ol className="flex flex-wrap items-center gap-2">
                            <li><Link className="transition hover:text-ink" href="/">{t("breadcrumb.home")}</Link></li>
                            <li aria-hidden="true">/</li>
                            <li aria-current="page" className="text-ink">{t("breadcrumb.hub")}</li>
                        </ol>
                    </nav>
                    <motion.p initial={{opacity: 0, y: 16}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8, ease: EASE, delay: 0.1}} className="eyebrow">
                        {t("hub.eyebrow")}
                    </motion.p>
                    <h1 className="mt-4 font-semibold leading-[0.95] tracking-display text-[clamp(2.8rem,9vw,8rem)]">
                        <span className="block overflow-hidden">
                            <motion.span initial={{y: "105%"}} animate={{y: 0}} transition={{duration: 1, ease: EASE, delay: 0.2}} className="block">
                                {t("hub.title.1")}
                            </motion.span>
                        </span>
                        <span className="block overflow-hidden">
                            <motion.span initial={{y: "105%"}} animate={{y: 0}} transition={{duration: 1, ease: EASE, delay: 0.3}} className="block pr-2 font-serif font-normal italic text-accent">
                                {t("hub.title.2")}
                            </motion.span>
                        </span>
                    </h1>
                    <motion.p initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.9, ease: EASE, delay: 0.5}}
                              className="mt-8 max-w-2xl text-xl leading-snug text-ink-2 sm:text-2xl">
                        {t("hub.intro")}
                    </motion.p>
                    <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.9, ease: EASE, delay: 0.6}} className="mt-4 text-sm text-ink-3">
                        {t("hub.count", {count: CITIES.length})}
                    </motion.p>
                </div>
            </section>

            <section className="bg-white py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <Reveal>
                        <p className="eyebrow">{t("hub.states")}</p>
                    </Reveal>
                    <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" step={0.04}>
                        {groups.map((g) => (
                            <Item key={g.code} className="h-full">
                                <div className="h-full rounded-[2rem] bg-paper p-6 hairline sm:p-7">
                                    <h2 className="text-lg font-semibold tracking-tight">{g.name}</h2>
                                    <ul className="mt-4 flex flex-wrap gap-2">
                                        {g.cities.map((c) => (
                                            <li key={c.slug}>
                                                <Link href={`/webdesign/${c.slug}`}
                                                      className="inline-block rounded-full bg-white px-3.5 py-1.5 text-sm font-medium hairline transition hover:bg-ink hover:text-white">
                                                    {c.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Item>
                        ))}
                    </Stagger>
                    <Reveal delay={0.1} className="mt-12 flex flex-col items-start gap-4 rounded-[2rem] bg-ink p-8 text-white sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-xl font-semibold tracking-tight">{t("hub.cta")}</p>
                        <Link href="/work#contact" className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-paper">
                            {t("cta.contact")}
                            <BsArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/>
                        </Link>
                    </Reveal>
                </div>
            </section>
        </Layout>
    )
}
