import Link from "next/link";
import {useRouter} from "next/router";
import {motion} from "framer-motion";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import {BsArrowRight, BsArrowUpRight} from "react-icons/bs";
import Layout from "../../components/layout/Layout";
import Reveal, {Stagger, Item} from "../../components/motion/Reveal";
import Emoji from "../../components/Emoji";
import {ProtectedMail} from "../../components/Protected";
import {CITIES, CITY_BY_SLUG, STATES, relatedCities} from "../../lib/cities";
import {APP_STORE_COUNT} from "../../components/home/projects.data";
import {LOCALES} from "../../lib/site";
import {graph, personSchema, businessSchema, websiteSchema, breadcrumbSchema, faqSchema, serviceSchema} from "../../lib/schema";
import DeveloperEmoji from "../../style/icons/DeveloperEmoji.png";
import PointingToYou from "../../style/icons/PointingToYouEmoji.png";
import MoneyEmoji from "../../style/icons/MoneyEmoji.png";
import MemoEmoji from "../../style/icons/MemoEmoji.png";
import EmailEmoji from "../../style/icons/EmailEmoji.png";
import BicepEmoji from "../../style/icons/BicepEmoji.png";
import LoveHandEmoji from "../../style/icons/LoveHandEmoji.png";

const EASE = [0.22, 1, 0.36, 1];
const CAL_URL = "https://cal.com/marvin-hulsmann-rjtji3/30min";

export async function getStaticPaths() {
    return {
        paths: LOCALES.flatMap((locale) => CITIES.map((c) => ({params: {city: c.slug}, locale}))),
        fallback: false,
    }
}

export async function getStaticProps({params, locale}) {
    const city = CITY_BY_SLUG[params.city];
    if (!city) return {notFound: true};
    return {
        props: {
            slug: city.slug,
            ...(await serverSideTranslations(locale, ["common", "cities"])),
        },
    }
}

function Card({className = "", children}) {
    return (
        <div className={`h-full rounded-[2rem] bg-white p-7 hairline transition duration-500 hover:-translate-y-1 hover:card-shadow sm:p-8 ${className}`}>
            {children}
        </div>
    )
}

export default function CityPage({slug}) {
    const {t} = useTranslation("cities");
    const {t: tc} = useTranslation("common");
    const {locale} = useRouter();
    const city = CITY_BY_SLUG[slug];
    const stateName = STATES[city.state];
    const vars = {city: city.name, state: stateName};
    const localBlurb = city.blurb[locale] || t("blurb.generic", vars);
    const path = `/webdesign/${city.slug}`;

    const services = [
        {icon: DeveloperEmoji, title: t("service.1.title"), text: t("service.1.text", vars)},
        {icon: BicepEmoji, title: t("service.2.title"), text: t("service.2.text", vars)},
        {icon: PointingToYou, title: t("service.3.title"), text: t("service.3.text", vars)},
        {icon: MoneyEmoji, title: t("service.4.title"), text: t("service.4.text", vars)},
    ];
    const why = [1, 2, 3, 4].map((i) => ({title: t(`why.${i}.title`), text: t(`why.${i}.text`)}));
    const steps = [1, 2, 3, 4].map((i) => ({title: t(`process.${i}.title`), text: t(`process.${i}.text`)}));
    const faqs = [1, 2, 3, 4, 5].map((i) => ({q: t(`faq.${i}.q`, vars), a: t(`faq.${i}.a`, vars)}));
    const nearby = relatedCities(city, 8);

    const title = t("meta.title", vars);
    const description = t("meta.description", vars);

    const jsonLd = graph(
        websiteSchema(locale),
        personSchema(locale),
        businessSchema(locale),
        serviceSchema({name: title, description, city: {...city, stateName}, path, locale}),
        breadcrumbSchema([
            {name: t("breadcrumb.home"), path: "/"},
            {name: t("breadcrumb.hub"), path: "/webdesign"},
            {name: city.name, path},
        ], locale),
        faqSchema(faqs),
    );

    return (
        <Layout title={title} description={description} jsonLd={jsonLd} xDefault="de">
            {/* Hero */}
            <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 md:pb-28">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute -top-56 right-[10%] h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,179,64,0.2),transparent_70%)] animate-float-slow"/>
                    <div className="absolute -left-40 top-[30%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,90,60,0.16),transparent_70%)] animate-float"/>
                </div>

                <div className="mx-auto max-w-7xl px-6">
                    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ink-3">
                        <ol className="flex flex-wrap items-center gap-2">
                            <li><Link className="transition hover:text-ink" href="/">{t("breadcrumb.home")}</Link></li>
                            <li aria-hidden="true">/</li>
                            <li><Link className="transition hover:text-ink" href="/webdesign">{t("breadcrumb.hub")}</Link></li>
                            <li aria-hidden="true">/</li>
                            <li aria-current="page" className="text-ink">{city.name}</li>
                        </ol>
                    </nav>

                    <motion.p
                        initial={{opacity: 0, y: 16}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, ease: EASE, delay: 0.1}}
                        className="eyebrow"
                    >
                        {t("eyebrow", vars)}
                    </motion.p>

                    <h1 className="mt-4 font-semibold leading-[0.95] tracking-display text-[clamp(2.8rem,9vw,8rem)]">
                        <span className="block overflow-hidden">
                            <motion.span initial={{y: "105%"}} animate={{y: 0}} transition={{duration: 1, ease: EASE, delay: 0.2}} className="block">
                                {t("h1.1")}
                            </motion.span>
                        </span>
                        <span className="block overflow-hidden">
                            <motion.span initial={{y: "105%"}} animate={{y: 0}} transition={{duration: 1, ease: EASE, delay: 0.3}} className="block pr-2 font-serif font-normal italic text-accent">
                                {t("h1.2", vars)}
                            </motion.span>
                        </span>
                    </h1>

                    <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-8">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.9, ease: EASE, delay: 0.5}}
                            className="lg:col-span-7"
                        >
                            <p className="max-w-2xl text-xl leading-snug text-ink-2 sm:text-2xl">{t("intro", vars)}</p>
                            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2">{localBlurb}</p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <Link href="/work#contact"
                                      className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-base font-medium text-white transition hover:bg-black">
                                    {t("cta.contact")}
                                    <BsArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/>
                                </Link>
                                <a href={CAL_URL} target="_blank" rel="noreferrer"
                                   className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-medium text-ink hairline transition hover:card-shadow">
                                    <Emoji src={MemoEmoji} className="h-5"/> {t("cta.call")}
                                </a>
                            </div>
                        </motion.div>

                        <motion.dl
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.9, ease: EASE, delay: 0.65}}
                            className="grid grid-cols-2 gap-3 self-start lg:col-span-5"
                        >
                            {[
                                {k: t("facts.base"), v: t("facts.base.value", vars)},
                                {k: t("facts.reply"), v: t("facts.reply.value")},
                                {k: t("facts.apps"), v: String(APP_STORE_COUNT)},
                                {k: t("facts.stack"), v: t("facts.stack.value")},
                            ].map((f) => (
                                <div key={f.k} className="rounded-[1.5rem] bg-white p-5 hairline">
                                    <dt className="eyebrow">{f.k}</dt>
                                    <dd className="mt-2 text-lg font-semibold leading-tight tracking-tight">{f.v}</dd>
                                </div>
                            ))}
                        </motion.dl>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6">
                    <Reveal>
                        <p className="eyebrow">{t("services.eyebrow")}</p>
                        <h2 className="mt-4 max-w-3xl font-semibold leading-[0.98] tracking-display text-[clamp(2.2rem,5.5vw,5rem)]">
                            {t("services.title", vars)}
                        </h2>
                    </Reveal>
                    <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {services.map((s) => (
                            <Item key={s.title} className="h-full">
                                <Card className="!bg-paper">
                                    <Emoji src={s.icon} className="h-10"/>
                                    <h3 className="mt-5 text-xl font-semibold tracking-tight">{s.title}</h3>
                                    <p className="mt-2 leading-relaxed text-ink-2">{s.text}</p>
                                </Card>
                            </Item>
                        ))}
                    </Stagger>
                </div>
            </section>

            {/* Why + remote */}
            <section className="relative overflow-hidden bg-ink py-24 text-white grain sm:py-32">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-40 top-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,179,64,0.2),transparent_70%)]"/>
                    <div className="absolute -right-40 bottom-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,90,60,0.22),transparent_70%)]"/>
                </div>
                <div className="relative mx-auto max-w-7xl px-6">
                    <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
                        <Reveal className="lg:col-span-5">
                            <p className="eyebrow !text-white/50">{t("why.eyebrow")}</p>
                            <h2 className="mt-4 font-semibold leading-[0.98] tracking-display text-[clamp(2.2rem,5.5vw,5rem)]">
                                {t("why.title")}
                            </h2>
                            <div className="mt-10 rounded-[2rem] glass-dark p-7 sm:p-8">
                                <p className="eyebrow !text-white/50">{t("remote.eyebrow")}</p>
                                <h3 className="mt-3 text-2xl font-semibold tracking-tight">{t("remote.title", vars)}</h3>
                                <p className="mt-3 leading-relaxed text-white/65">{t("remote.text", vars)}</p>
                            </div>
                        </Reveal>
                        <Stagger className="grid gap-4 sm:grid-cols-2 lg:col-span-7" delay={0.1}>
                            {why.map((w, i) => (
                                <Item key={w.title} className="h-full">
                                    <div className="h-full rounded-[2rem] bg-white/[0.04] p-7 hairline-light transition-colors duration-500 hover:bg-white/[0.08]">
                                        <span className="text-sm tabular-nums text-white/40">{String(i + 1).padStart(2, "0")}</span>
                                        <h3 className="mt-4 text-xl font-semibold tracking-tight">{w.title}</h3>
                                        <p className="mt-2 leading-relaxed text-white/60">{w.text}</p>
                                    </div>
                                </Item>
                            ))}
                        </Stagger>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="bg-paper py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6">
                    <Reveal>
                        <p className="eyebrow">{t("process.eyebrow")}</p>
                        <h2 className="mt-4 max-w-3xl font-semibold leading-[0.98] tracking-display text-[clamp(2.2rem,5.5vw,5rem)]">
                            {t("process.title")}
                        </h2>
                    </Reveal>
                    <Stagger className="mt-12 grid gap-4 md:grid-cols-4">
                        {steps.map((s, i) => (
                            <Item key={s.title} className="h-full">
                                <Card>
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">{i + 1}</span>
                                    <h3 className="mt-5 text-xl font-semibold tracking-tight">{s.title}</h3>
                                    <p className="mt-2 leading-relaxed text-ink-2">{s.text}</p>
                                </Card>
                            </Item>
                        ))}
                    </Stagger>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
                        <Reveal className="lg:col-span-4">
                            <p className="eyebrow">{t("faq.eyebrow")}</p>
                            <h2 className="mt-4 font-semibold leading-[0.98] tracking-display text-[clamp(2.2rem,5vw,4.5rem)]">
                                {t("faq.title", vars)}
                            </h2>
                        </Reveal>
                        <Stagger className="flex flex-col gap-3 lg:col-span-8" delay={0.05}>
                            {faqs.map((f) => (
                                <Item key={f.q}>
                                    <details className="group rounded-[1.5rem] bg-paper p-6 hairline open:bg-white open:card-shadow">
                                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold tracking-tight [&::-webkit-details-marker]:hidden">
                                            {f.q}
                                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-ink-3 transition group-open:rotate-45 group-open:bg-ink group-open:text-white">+</span>
                                        </summary>
                                        <p className="mt-4 leading-relaxed text-ink-2">{f.a}</p>
                                    </details>
                                </Item>
                            ))}
                        </Stagger>
                    </div>
                </div>
            </section>

            {/* Nearby */}
            <section className="bg-paper py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{t("nearby.title", vars)}</h2>
                            <p className="mt-2 text-ink-2">{t("nearby.text", vars)}</p>
                        </div>
                        <Link href="/webdesign" className="group inline-flex items-center gap-2 self-start rounded-full bg-white px-5 py-2.5 text-sm font-medium hairline transition hover:card-shadow">
                            {t("nearby.all")}
                            <BsArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
                        </Link>
                    </Reveal>
                    <Reveal delay={0.05} className="mt-8 flex flex-wrap gap-2">
                        {nearby.map((c) => (
                            <Link key={c.slug} href={`/webdesign/${c.slug}`}
                                  className="rounded-full bg-white px-4 py-2 text-sm font-medium hairline transition hover:bg-ink hover:text-white">
                                {c.name}
                            </Link>
                        ))}
                    </Reveal>
                </div>
            </section>

            {/* Final CTA */}
            <section className="relative overflow-hidden bg-ink text-white grain">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                    <div className="absolute left-1/2 top-1/2 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,90,60,0.28),transparent_70%)] animate-float-slow"/>
                </div>
                <div className="relative mx-auto max-w-7xl px-6 py-24 text-center sm:py-32">
                    <Reveal>
                        <p className="eyebrow !text-white/50">{t("final.eyebrow")}</p>
                        <h2 className="mx-auto mt-6 max-w-4xl font-semibold leading-[0.96] tracking-display text-[clamp(2.4rem,7vw,6.5rem)]">
                            {t("final.title", vars)}
                        </h2>
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/65 sm:text-xl">{t("final.text")}</p>
                    </Reveal>
                    <Reveal delay={0.15} className="mt-10 flex flex-wrap items-center justify-center gap-3">
                        <Link href="/work#contact"
                              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-medium text-ink transition hover:bg-paper">
                            {tc("cta.work")}
                            <BsArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/>
                        </Link>
                        <ProtectedMail
                            placeholder={t("cta.mail")}
                            className="inline-flex cursor-pointer items-center gap-2 rounded-full glass-dark px-6 py-3.5 text-base font-medium text-white transition hover:bg-white/15"
                        >
                            {() => <><Emoji src={EmailEmoji} className="h-5"/> {t("cta.mail")}</>}
                        </ProtectedMail>
                        <a href={CAL_URL} target="_blank" rel="noreferrer"
                           className="inline-flex items-center gap-2 rounded-full glass-dark px-6 py-3.5 text-base font-medium text-white transition hover:bg-white/15">
                            <Emoji src={LoveHandEmoji} className="h-5"/> {t("cta.call")}
                        </a>
                    </Reveal>
                </div>
            </section>
        </Layout>
    )
}
