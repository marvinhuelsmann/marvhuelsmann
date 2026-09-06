import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {BsArrowUpRight} from "react-icons/bs";
import Layout from "../components/layout/Layout";
import Reveal, {Stagger, Item} from "../components/motion/Reveal";
import Emoji from "../components/Emoji";
import {ProtectedMail} from "../components/Protected";
import LoveHandEmoji from "../style/icons/LoveHandEmoji.png";
import PointingToYou from "../style/icons/PointingToYouEmoji.png";
import EmailEmoji from "../style/icons/EmailEmoji.png";

/**
 * Privacy policy linked from the App Store listings of DoThis and Procto.
 * Intentionally unlinked from the rest of the site and excluded from search:
 * it exists for the store review, not for ranking.
 */
export async function getStaticProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    }
}

const APPS = [
    {name: "DoThis", href: "https://apps.apple.com/de/app/dothis/id6744120353", tag: "iOS"},
    {name: "Procto", href: null, tag: "iOS"},
];

const SECTIONS = [
    {
        icon: LoveHandEmoji,
        title: "No tracking.",
        text: "DoThis and Procto do not collect any data for tracking purposes. There are no advertising identifiers, no cross-app profiles and no data brokers involved.",
    },
    {
        icon: PointingToYou,
        title: "Anonymous usage data only.",
        text: "The apps collect anonymous usage data for private analytics – for example which features are used and whether something crashes. This data cannot be linked to you as a person.",
    },
    {
        icon: EmailEmoji,
        title: "Never for marketing.",
        text: "Usage data is not used for marketing, advertising, profiling or anything alike, and it is not sold or shared with third parties for their own purposes.",
    },
];

export default function FinancyTracking() {
    return (
        <Layout
            title="Privacy Policy – DoThis & Procto"
            description="Privacy policy for the DoThis and Procto apps by Marvin Hülsmann."
            noindex
        >
            <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 md:pb-20">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute -top-56 right-[10%] h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(closest-side,rgba(90,200,250,0.18),transparent_70%)] animate-float-slow"/>
                    <div className="absolute -left-40 top-[30%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,90,60,0.14),transparent_70%)] animate-float"/>
                </div>

                <div className="mx-auto max-w-5xl px-6">
                    <Reveal>
                        <p className="eyebrow">Privacy Policy</p>
                        <h1 className="mt-4 font-semibold leading-[0.95] tracking-display text-[clamp(2.8rem,9vw,7.5rem)]">
                            Your data stays
                            <span className="block font-serif font-normal italic text-accent-cool">yours.</span>
                        </h1>
                        <p className="mt-8 max-w-2xl text-xl leading-snug text-ink-2 sm:text-2xl">
                            This policy applies to the apps DoThis and Procto by Marvin Hülsmann. It is short on purpose:
                            the apps collect almost nothing, and nothing that identifies you.
                        </p>
                    </Reveal>

                    <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-2">
                        {APPS.map((app) => app.href ? (
                            <a key={app.name} href={app.href} target="_blank" rel="noreferrer"
                               className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium hairline transition hover:card-shadow">
                                {app.name}
                                <span className="text-xs text-ink-3">{app.tag}</span>
                                <BsArrowUpRight className="h-3.5 w-3.5 text-ink-3 transition group-hover:text-ink"/>
                            </a>
                        ) : (
                            <span key={app.name} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium hairline">
                                {app.name}
                                <span className="text-xs text-ink-3">{app.tag}</span>
                            </span>
                        ))}
                    </Reveal>
                </div>
            </section>

            <section className="bg-white py-20 sm:py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <Stagger className="grid gap-4 md:grid-cols-3">
                        {SECTIONS.map((s) => (
                            <Item key={s.title} className="h-full">
                                <div className="h-full rounded-[2rem] bg-paper p-7 hairline transition duration-500 hover:-translate-y-1 hover:card-shadow sm:p-8">
                                    <Emoji src={s.icon} className="h-10"/>
                                    <h2 className="mt-5 text-xl font-semibold tracking-tight">{s.title}</h2>
                                    <p className="mt-2 leading-relaxed text-ink-2">{s.text}</p>
                                </div>
                            </Item>
                        ))}
                    </Stagger>

                    <Reveal delay={0.1} className="mt-4 rounded-[2rem] bg-ink p-7 text-white grain sm:p-10">
                        <div className="relative grid gap-8 md:grid-cols-12 md:items-end">
                            <div className="md:col-span-8">
                                <p className="eyebrow !text-white/50">In one sentence</p>
                                <p className="mt-4 text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                                    DoThis &amp; Procto do not collect any type of data for tracking. They collect anonymous usage
                                    data for private analytics, which is not used for marketing, tracking, advertisement or anything alike.
                                </p>
                            </div>
                            <div className="md:col-span-4 md:text-right">
                                <p className="text-sm text-white/50">Questions about your data?</p>
                                <ProtectedMail
                                    placeholder="Write an email"
                                    className="mt-2 inline-flex cursor-pointer items-center gap-2 rounded-full glass-dark px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/15"
                                >
                                    {() => <><Emoji src={EmailEmoji} className="h-4"/> Write an email</>}
                                </ProtectedMail>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </Layout>
    )
}
