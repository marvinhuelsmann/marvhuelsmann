import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Layout from "../components/layout/Layout";
import Reveal from "../components/motion/Reveal";

export async function getStaticProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    }
}

export default function FinancyTracking() {
    return (
        <Layout
            title="Privacy Policy – DoThis & JourneyMate"
            description="Privacy policy for the DoThis and JourneyMate apps by Marvin Hülsmann."
        >
            <section className="pt-36 pb-24 sm:pt-44 md:min-h-[70svh]">
                <div className="mx-auto max-w-3xl px-6">
                    <Reveal>
                        <p className="eyebrow">DoThis &amp; JourneyMate</p>
                        <h1 className="mt-4 font-semibold leading-[0.98] tracking-display text-[clamp(2.6rem,7vw,5.5rem)]">
                            Privacy Policy<span className="text-accent">.</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.1} className="mt-10 rounded-[2rem] bg-white p-7 hairline sm:p-10">
                        <p className="text-xl leading-relaxed text-ink-2">
                            DoThis &amp; JourneyMate does not collect any type of data for tracking. DoThis &amp; JourneyMate
                            collects anonymous usage data for private analytics, which is not used for marketing,
                            tracking, advertisement or anything alike.
                        </p>
                    </Reveal>
                </div>
            </section>
        </Layout>
    )
}
