import {useTranslation} from "next-i18next";
import Reveal, {Stagger, Item} from "../motion/Reveal";
import Emoji from "../Emoji";
import BicepEmoji from "../../style/icons/BicepEmoji.png";
import WeightlifterEmoji from "../../style/icons/WeightlifterEmoji.png";
import DeveloperEmoji from "../../style/icons/DeveloperEmoji.png";
import MoneyEmoji from "../../style/icons/MoneyEmoji.png";
import PointingToYou from "../../style/icons/PointingToYouEmoji.png";

function splitTraits(str) {
    return str.split(",").map((s) => s.trim()).filter(Boolean);
}

export default function Skills() {
    const {t} = useTranslation("common");
    const traits = [...splitTraits(t("work.why.text.1")), ...splitTraits(t("work.why.text.2"))];
    const loop = [...traits, ...traits];

    const services = [
        {icon: DeveloperEmoji, title: t("work.service.1.title"), text: t("work.service.1.text")},
        {icon: PointingToYou, title: t("work.service.2.title"), text: t("work.service.2.text")},
        {icon: MoneyEmoji, title: t("work.service.3.title"), text: t("work.service.3.text")},
    ];

    return (
        <section className="relative overflow-hidden bg-ink py-24 text-white grain sm:py-32 md:py-40">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute -left-40 top-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,179,64,0.2),transparent_70%)]"/>
                <div className="absolute -right-40 bottom-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,90,60,0.22),transparent_70%)]"/>
            </div>

            <div className="relative mx-auto max-w-7xl px-6">
                <Reveal>
                    <p className="eyebrow !text-white/50">{t("work.skills.eyebrow")}</p>
                </Reveal>

                <Stagger className="mt-8 grid gap-4 md:grid-cols-2">
                    <Item className="rounded-[2rem] glass-dark p-8 sm:p-10">
                        <p className="font-semibold leading-[1.05] tracking-display text-[clamp(1.75rem,3.6vw,3.25rem)]">
                            {t("skills.text.1")} <Emoji src={BicepEmoji}/>
                        </p>
                    </Item>
                    <Item className="rounded-[2rem] glass-dark p-8 sm:p-10">
                        <p className="font-semibold leading-[1.05] tracking-display text-[clamp(1.75rem,3.6vw,3.25rem)]">
                            {t("skills.text.2")} <Emoji src={WeightlifterEmoji}/>
                        </p>
                    </Item>
                </Stagger>

                <Stagger className="mt-4 grid gap-4 md:grid-cols-3" delay={0.1}>
                    {services.map((s) => (
                        <Item key={s.title} className="h-full">
                            <div className="h-full rounded-[2rem] bg-white/[0.04] p-7 hairline-light transition-colors duration-500 hover:bg-white/[0.08]">
                                <Emoji src={s.icon} className="h-10"/>
                                <h3 className="mt-5 text-xl font-semibold tracking-tight">{s.title}</h3>
                                <p className="mt-2 text-white/60 leading-relaxed">{s.text}</p>
                            </div>
                        </Item>
                    ))}
                </Stagger>

                <Reveal className="mt-20 md:mt-28">
                    <h2 className="font-semibold leading-none tracking-display text-[clamp(2.4rem,7vw,6rem)]">
                        {t("work.why")}
                    </h2>
                </Reveal>
            </div>

            <Reveal delay={0.1} className="relative mt-10">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent"/>
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent"/>
                <div className="flex w-max animate-marquee gap-3 will-change-transform [animation-play-state:running] hover:[animation-play-state:paused]">
                    {loop.map((trait, i) => (
                        <span
                            key={`${trait}-${i}`}
                            className="whitespace-nowrap rounded-full glass-dark px-6 py-3 text-lg font-medium capitalize sm:text-2xl"
                        >
                            {trait}
                        </span>
                    ))}
                </div>
            </Reveal>
        </section>
    )
}
