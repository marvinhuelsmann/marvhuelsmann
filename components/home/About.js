import Image from "next/image";
import {useTranslation} from "next-i18next";
import {BsApple} from "react-icons/bs";
import Emoji from "../Emoji";
import AppleText from "../AppleText";
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

const tile = "spotlight relative h-full overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] card-shadow transition-[translate] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1";

/** Motion wrapper stays transition-free so framer-motion owns its transform; the inner tile handles hover. */
function Tile({className = "", span = "", children}) {
    return (
        <Item className={span}>
            <div className={`${tile} ${className}`}>{children}</div>
        </Item>
    )
}

/** Photo tile with the shared dark grade and an optional glass caption. */
function PhotoTile({src, alt, caption, position, sizes, span}) {
    return (
        <Tile span={span} className="group bg-surface">
            <Image src={src} alt={alt} fill placeholder="blur" sizes={sizes}
                   className={`photo-pro object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] ${position}`}/>
            <div aria-hidden="true" className="photo-vignette"/>
            {caption && (
                <span className="glass absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-ink sm:bottom-5 sm:left-5">
                    {caption}
                </span>
            )}
        </Tile>
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
        <section id="about" className="relative z-10 -mt-10 rounded-t-[2.25rem] border-t border-white/[0.09] bg-paper py-24 shadow-[0_-40px_80px_-20px_rgba(0,0,0,0.9)] sm:-mt-14 sm:rounded-t-[3rem] sm:py-32 md:py-40">
            <div className="mx-auto max-w-7xl px-6">
                {/* one statement – who, what, where */}
                <Reveal>
                    <p className="eyebrow">{t("about.eyebrow")}</p>
                    <h2 className="mt-5 max-w-5xl font-semibold leading-[1.06] tracking-display text-[clamp(1.9rem,4.4vw,4.2rem)]">
                        {t("about.lead.1")} <Emoji src={StudentEmoji}/> <AppleText>{t("about.lead.2")}</AppleText> <Emoji src={DeveloperEmoji}/>{" "}
                        <span className="text-ink-3">{t("about.lead.3", {age})}</span>
                    </h2>
                </Reveal>

                <Stagger className="mt-14 grid grid-flow-dense grid-cols-2 gap-3 sm:gap-4 md:mt-20 md:grid-cols-4 md:auto-rows-[11.5rem]">
                    {/* WWDC – the hero of the grid */}
                    <PhotoTile
                        span="col-span-2 row-span-2 min-h-[24rem] md:min-h-0"
                        src={WWDCImage}
                        alt="Marvin auf der WWDC im Apple Park"
                        position="object-[center_35%]"
                        sizes="(min-width: 768px) 50vw, 100vw"
                        caption={<><BsApple className="h-3.5 w-3.5"/> {t("about.wwdc.caption")}</>}
                    />

                    {/* Swift Student Challenge */}
                    <Tile span="col-span-2 min-h-[10rem] md:col-span-1" className="bg-elevated">
                        <div aria-hidden="true" className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[radial-gradient(closest-side,rgba(255,90,60,0.3),transparent_70%)]"/>
                        <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
                            <p className="eyebrow">{t("bento.ssc")}</p>
                            <div>
                                <p className="font-semibold leading-none tracking-display text-[clamp(2.6rem,4.4vw,3.75rem)]">
                                    2×<span className="text-accent">.</span>
                                </p>
                                <p className="mt-2 text-sm text-ink-2">{t("bento.ssc.sub")}</p>
                            </div>
                        </div>
                    </Tile>

                    {/* San Francisco photo */}
                    <PhotoTile
                        span="row-span-2 min-h-[20rem] md:min-h-0"
                        src={SFImage}
                        alt="Marvin in San Francisco"
                        position="object-[center_40%]"
                        sizes="(min-width: 768px) 25vw, 50vw"
                        caption={t("about.sf.caption")}
                    />

                    {/* Apps */}
                    <Tile span="min-h-[10rem]" className="bg-elevated">
                        <div className="flex h-full flex-col justify-between p-5 sm:p-6">
                            <p className="eyebrow">App Store</p>
                            <div>
                                <p className="font-semibold leading-none tracking-display text-[clamp(2.6rem,4.4vw,3.75rem)]">
                                    {APP_STORE_COUNT}<span className="text-accent">.</span>
                                </p>
                                <p className="mt-2 text-sm text-ink-2">{t("bento.apps")}</p>
                            </div>
                        </div>
                    </Tile>

                    {/* Hobbies */}
                    <Tile span="col-span-2 min-h-[10rem] md:col-span-3" className="bg-surface">
                        <div className="flex h-full flex-col justify-between gap-5 p-5 sm:p-6">
                            <p className="eyebrow">{t("bento.hobbies")}</p>
                            <ul className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
                                {hobbies.map((h) => (
                                    <li key={h.label} className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white/[0.05] py-2 pl-2.5 pr-4 text-sm font-medium text-ink hairline sm:text-[15px]">
                                        <Emoji src={h.icon} className="h-5 sm:h-6"/>
                                        {h.label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Tile>

                    {/* Age */}
                    <Tile span="min-h-[10rem]" className="bg-surface">
                        <div className="flex h-full flex-col justify-between p-5 sm:p-6">
                            <p className="eyebrow">{t("bento.age")}</p>
                            <p className="font-semibold leading-none tracking-display text-[clamp(2.6rem,4.4vw,3.75rem)]">
                                {age}<span className="text-accent">.</span>
                            </p>
                        </div>
                    </Tile>

                </Stagger>
            </div>
        </section>
    )
}
