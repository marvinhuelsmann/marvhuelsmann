import Image from "next/image";
import {useEffect, useState} from "react";
import {useTranslation} from "next-i18next";
import Emoji from "../Emoji";
import Reveal, {Stagger, Item} from "../motion/Reveal";
import StudentEmoji from "../../style/icons/StudentEmoji.png";
import DeveloperEmoji from "../../style/icons/DeveloperEmoji.png";
import RollerCoasterEmoji from "../../style/icons/RollerCoasterEmoji.png";
import PizzaEmoji from "../../style/icons/PizzaEmoji.png";
import LoveHandEmoji from "../../style/icons/LoveHandEmoji.png";
import SFImage from "../../public/SFStreetMarvin.jpeg";
import WWDCImage from "../../public/WWDCMarvin.jpeg";
import {APP_STORE_COUNT} from "./projects.data";

const BIRTHDAY = "2005-09-11";
const getAge = (birthDate) => Math.floor((Date.now() - new Date(birthDate).getTime()) / 3.15576e10);

function BerlinClock() {
    const [time, setTime] = useState("");
    useEffect(() => {
        const fmt = new Intl.DateTimeFormat("de-DE", {hour: "2-digit", minute: "2-digit", timeZone: "Europe/Berlin"});
        const tick = () => setTime(fmt.format(new Date()));
        tick();
        const id = setInterval(tick, 10_000);
        return () => clearInterval(id);
    }, []);
    return <span className="tabular-nums">{time || "--:--"}</span>;
}

const tile = "relative h-full overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] hairline transition-[translate,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:card-shadow";

/** Motion wrapper stays transition-free so framer-motion owns its transform; the inner tile handles hover. */
function Tile({className = "", span = "", children}) {
    return (
        <Item className={span}>
            <div className={`${tile} ${className}`}>{children}</div>
        </Item>
    )
}

export default function About() {
    const {t} = useTranslation("common");
    const age = getAge(BIRTHDAY);

    const hobbies = [
        {icon: RollerCoasterEmoji, label: t("hobby.coaster")},
        {icon: PizzaEmoji, label: t("hobby.pizza")},
        {icon: StudentEmoji, label: t("hobby.study")},
        {icon: LoveHandEmoji, label: t("hobby.friends")},
    ];

    return (
        <section id="about" className="relative bg-white py-24 sm:py-32 md:py-40">
            <div className="mx-auto max-w-7xl px-6">
                <Reveal>
                    <p className="eyebrow">{t("about.eyebrow")}</p>
                    <h2 className="mt-5 max-w-5xl font-semibold leading-[1.04] tracking-display text-[clamp(1.9rem,4.6vw,4.4rem)]">
                        {t("whoiam.text.1")} <Emoji src={StudentEmoji}/> {t("whoiam.text.2")}{" "}
                        <span className="text-ink-2">
                            {t("whoiam.text.3")} <Emoji src={DeveloperEmoji}/> {t("whoiam.text.4")}
                        </span>{" "}
                        {t("whoiam.text.5")} <Emoji src={RollerCoasterEmoji}/> {t("whoiam.text.6")} <Emoji src={PizzaEmoji}/>
                    </h2>
                </Reveal>

                <Stagger className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:mt-20 md:grid-cols-4 md:auto-rows-[11.5rem]">
                    {/* Story */}
                    <Tile span="col-span-2 row-span-2" className="bg-ink text-white grain hairline-light">
                        <div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(255,90,60,0.35),transparent_70%)]"/>
                        <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
                            <p className="text-[clamp(1.15rem,2.1vw,1.75rem)] leading-snug tracking-tight">
                                {t("person.text.1")}
                                <span className="font-semibold text-amber">{age}{t("person.text.2")}</span>{" "}
                                {t("person.text.3")} <span className="font-semibold text-amber">{t("person.text.4")}</span>
                                {t("person.text.5")}<span className="font-semibold">{t("person.text.6")}</span> {t("person.text.7")}
                            </p>
                            <p className="mt-8 flex items-center gap-2 text-sm text-white/60">
                                <Emoji src={LoveHandEmoji} className="h-5"/> {t("person")}
                            </p>
                        </div>
                    </Tile>

                    {/* San Francisco photo */}
                    <Tile span="col-span-2 row-span-2 md:col-span-1 min-h-[22rem] md:min-h-0" className="bg-white">
                        <Image src={SFImage} alt="Marvin in San Francisco" fill placeholder="blur"
                               sizes="(min-width: 768px) 25vw, 100vw" className="object-cover object-[center_40%]"/>
                    </Tile>

                    {/* Age */}
                    <Tile span="min-h-[10rem]" className="bg-[#fff1ec]">
                        <div aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[radial-gradient(closest-side,rgba(255,90,60,0.35),transparent_70%)]"/>
                        <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
                            <p className="eyebrow !text-coral/80">{t("bento.age")}</p>
                            <p className="font-semibold leading-none tracking-display text-[clamp(3rem,5vw,4.5rem)]">
                                {age}<span className="text-accent">.</span>
                            </p>
                        </div>
                    </Tile>

                    {/* Clock */}
                    <Tile span="min-h-[10rem]" className="bg-paper">
                        <div className="flex h-full flex-col justify-between p-5 sm:p-6">
                            <p className="eyebrow">{t("bento.time")}</p>
                            <div>
                                <p className="font-semibold leading-none tracking-display text-[clamp(2.2rem,4vw,3.25rem)]">
                                    <BerlinClock/>
                                </p>
                                <p className="mt-2 flex items-center gap-1.5 text-sm text-ink-2">
                                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse-soft"/>
                                    Berlin
                                </p>
                            </div>
                        </div>
                    </Tile>

                    {/* Hobbies */}
                    <Tile span="col-span-2 min-h-[10rem]" className="bg-white">
                        <div className="flex h-full flex-col justify-between p-5 sm:p-6">
                            <p className="eyebrow">{t("bento.hobbies")}</p>
                            <ul className="mt-4 grid grid-cols-4 gap-2">
                                {hobbies.map((h) => (
                                    <li key={h.label} className="flex flex-col items-center gap-2 rounded-2xl bg-paper px-2 py-3 text-center">
                                        <Emoji src={h.icon} className="h-8 sm:h-9"/>
                                        <span className="text-xs font-medium text-ink-2 sm:text-sm">{h.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Tile>

                    {/* Apps */}
                    <Tile span="min-h-[10rem]" className="bg-gradient-to-br from-[#ff5a3c] via-[#ff2d55] to-[#ffb340] text-white">
                        <div className="flex h-full flex-col justify-between p-5 sm:p-6">
                            <p className="eyebrow !text-white/80">App Store</p>
                            <div>
                                <p className="font-semibold leading-none tracking-display text-[clamp(3rem,5vw,4.5rem)]">{APP_STORE_COUNT}</p>
                                <p className="mt-2 text-sm font-medium text-white/90">{t("bento.apps")}</p>
                                <p className="text-xs text-white/70">{t("bento.apps.sub")}</p>
                            </div>
                        </div>
                    </Tile>

                    {/* WWDC photo */}
                    <Tile span="min-h-[10rem]" className="bg-white">
                        <Image src={WWDCImage} alt="Marvin auf der WWDC im Apple Park" fill placeholder="blur"
                               sizes="(min-width: 768px) 25vw, 50vw" className="object-cover object-[center_33%]"/>
                    </Tile>
                </Stagger>
            </div>
        </section>
    )
}
