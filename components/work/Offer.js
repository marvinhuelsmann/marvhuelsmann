import {useTranslation} from "next-i18next";
import {BsGlobe2, BsPhone, BsVectorPen, BsArrowRight} from "react-icons/bs";
import Reveal, {Stagger, Item} from "../motion/Reveal";
import {APP_STORE_COUNT} from "../home/projects.data";

/**
 * The /work journey between the hero and the form:
 * what I build → how a project runs → why it works out → contact.
 */

const BUILD = [
    {key: "web", Icon: BsGlobe2, glow: "48,209,88"},
    {key: "apps", Icon: BsPhone, glow: "10,132,255"},
    {key: "design", Icon: BsVectorPen, glow: "255,90,60"},
];

function SectionHead({eyebrow, title, sub}) {
    return (
        <Reveal>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-4 max-w-3xl font-semibold leading-[0.98] tracking-display text-silver text-[clamp(2.2rem,5.2vw,4.75rem)]">
                {title}
            </h2>
            {sub && <p className="mt-5 max-w-xl text-lg text-ink-2 sm:text-xl">{sub}</p>}
        </Reveal>
    )
}

export function Build() {
    const {t} = useTranslation("common");
    return (
        <section className="relative bg-surface py-24 sm:py-32 md:py-40">
            <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(80rem,90%)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent"/>
            <div className="mx-auto max-w-7xl px-6">
                <SectionHead eyebrow={t("work.build.eyebrow")} title={t("work.build.title")}/>

                <Stagger className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3">
                    {BUILD.map(({key, Icon, glow}) => (
                        <Item key={key} className="h-full">
                            <div className="spotlight group relative h-full overflow-hidden rounded-[2rem] bg-elevated p-7 card-shadow sm:p-8">
                                <div aria-hidden="true"
                                     className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full opacity-30 transition-opacity duration-700 group-hover:opacity-60"
                                     style={{background: `radial-gradient(closest-side, rgba(${glow},0.6), transparent)`}}/>
                                <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] hairline">
                                    <Icon className="h-5 w-5 text-ink"/>
                                </span>
                                <h3 className="relative mt-8 text-2xl font-semibold tracking-tight">{t(`work.build.${key}.title`)}</h3>
                                <p className="relative mt-3 leading-relaxed text-ink-2">{t(`work.build.${key}.text`)}</p>
                            </div>
                        </Item>
                    ))}
                </Stagger>
            </div>
        </section>
    )
}

export function Process() {
    const {t} = useTranslation("common");
    const steps = [1, 2, 3, 4];
    return (
        <section className="relative bg-paper py-24 sm:py-32 md:py-40">
            <div className="mx-auto max-w-7xl px-6">
                <SectionHead eyebrow={t("work.process.eyebrow")} title={t("work.process.title")} sub={t("work.process.sub")}/>

                <Stagger className="relative mt-12 grid gap-4 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
                    {/* connecting line on large screens */}
                    <div aria-hidden="true" className="pointer-events-none absolute left-8 right-8 top-[2.35rem] hidden h-px bg-gradient-to-r from-white/5 via-white/15 to-white/5 lg:block"/>
                    {steps.map((n) => (
                        <Item key={n} className="h-full">
                            <div className="relative h-full rounded-[2rem] bg-surface p-7 hairline">
                                <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-ink font-mono text-sm font-semibold text-black">
                                    {n}
                                </span>
                                <h3 className="mt-6 text-xl font-semibold tracking-tight">{t(`work.process.${n}.title`)}</h3>
                                <p className="mt-2 leading-relaxed text-ink-2">{t(`work.process.${n}.text`)}</p>
                            </div>
                        </Item>
                    ))}
                </Stagger>
            </div>
        </section>
    )
}

export function Proof() {
    const {t} = useTranslation("common");
    const facts = [
        {value: "2×", label: t("work.proof.wwdc")},
        {value: String(APP_STORE_COUNT), label: t("work.proof.apps")},
        {value: "24h", label: t("work.proof.reply")},
    ];
    return (
        <section className="relative bg-surface py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6">
                <SectionHead eyebrow={t("work.proof.eyebrow")} title={t("work.proof.title")}/>
                <Stagger className="mt-12 grid gap-4 sm:grid-cols-3 md:mt-16">
                    {facts.map((f) => (
                        <Item key={f.label}>
                            <div className="rounded-[2rem] bg-elevated p-7 card-shadow sm:p-8">
                                <p className="font-semibold leading-none tracking-display text-silver text-[clamp(3rem,6vw,5rem)]">{f.value}</p>
                                <p className="mt-4 text-ink-2">{f.label}</p>
                            </div>
                        </Item>
                    ))}
                </Stagger>
                <Reveal delay={0.1} className="mt-10">
                    <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-base font-medium text-black transition hover:bg-white">
                        {t("work.proof.cta")}
                        <BsArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/>
                    </a>
                </Reveal>
            </div>
        </section>
    )
}
