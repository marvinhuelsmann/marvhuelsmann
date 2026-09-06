import {motion} from "framer-motion";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import {BsArrowDown} from "react-icons/bs";
import Layout from "../components/layout/Layout";
import Skills from "../components/work/Skills";
import Contact from "../components/work/Contact";
import {graph, personSchema, businessSchema, websiteSchema, breadcrumbSchema} from "../lib/schema";

const EASE = [0.22, 1, 0.36, 1];

export async function getStaticProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "contact"])),
        },
    }
}

export default function Work() {
    const {t} = useTranslation("common");
    const {locale} = useRouter();
    const jsonLd = graph(
        websiteSchema(locale),
        personSchema(locale),
        businessSchema(locale),
        breadcrumbSchema([{name: t("nav.home"), path: "/"}, {name: t("nav.work"), path: "/work"}], locale),
    );

    return (
        <Layout
            title={t("meta.work.title")}
            description={t("meta.work.description")}
            jsonLd={jsonLd}
        >
            <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 md:min-h-[92svh] md:pb-28">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute -top-56 right-[10%] h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,179,64,0.2),transparent_70%)] animate-float-slow"/>
                    <div className="absolute -left-40 top-[30%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,90,60,0.16),transparent_70%)] animate-float"/>
                </div>

                <div className="mx-auto flex max-w-7xl flex-col px-6">
                    <motion.p
                        initial={{opacity: 0, y: 16}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, ease: EASE, delay: 0.2}}
                        className="text-2xl text-ink-2 sm:text-3xl"
                    >
                        {t("work.definitely.text.1")}{" "}
                        <span className="underline decoration-coral/40 decoration-[3px] underline-offset-[6px]">{t("work.definitely.text.2")}</span>{" "}
                        {t("work.definitely.text.3")}
                    </motion.p>

                    <h1 className="mt-2 overflow-hidden font-serif italic leading-[1.05] tracking-[-0.03em] text-[clamp(4.5rem,17vw,15rem)]">
                        <motion.span
                            initial={{y: "105%"}}
                            animate={{y: 0}}
                            transition={{duration: 1.1, ease: EASE, delay: 0.35}}
                            className="block pr-4 text-accent"
                        >
                            {t("work.definitely")}
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.9, ease: EASE, delay: 0.7}}
                        className="mt-8 max-w-2xl text-xl leading-snug text-ink-2 sm:text-2xl"
                    >
                        {t("work.hero.sub")}
                    </motion.p>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.9, ease: EASE, delay: 0.85}}
                        className="mt-10 flex flex-wrap gap-3"
                    >
                        <a href="#contact"
                           className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-base font-medium text-white transition hover:bg-black">
                            {t("work.form.eyebrow")}
                            <BsArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5"/>
                        </a>
                        <a href="https://cal.com/marvin-hulsmann-rjtji3/30min" target="_blank" rel="noreferrer"
                           className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-medium text-ink hairline transition hover:card-shadow">
                            {t("cta.meeting")}
                        </a>
                    </motion.div>
                </div>
            </section>

            <Skills/>
            <Contact/>
        </Layout>
    )
}
