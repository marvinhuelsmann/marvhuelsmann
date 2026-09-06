import {useState} from "react";
import Image from "next/image";
import {useTranslation} from "next-i18next";
import {BsArrowRight, BsArrowUpRight} from "react-icons/bs";
import Reveal from "../motion/Reveal";
import Emoji from "../Emoji";
import EmailEmoji from "../../style/icons/EmailEmoji.png";
import MemoEmoji from "../../style/icons/MemoEmoji.png";
import Photo from "../../public/Marvin_Mountain.jpeg";
import {SOCIALS} from "../Footer";
import {ProtectedMail} from "../Protected";
import {getContactMail} from "../../lib/contact";

const field = "mt-1.5 block w-full rounded-2xl bg-paper px-4 py-3.5 text-lg text-ink outline-none ring-1 ring-black/[0.06] transition placeholder:text-ink-3 focus:bg-white focus:ring-2 focus:ring-ink";
const label = "block text-sm font-medium text-ink-2";

function ContactForm() {
    const {t} = useTranslation("contact");
    const [form, setForm] = useState({firstName: "", lastName: "", email: "", message: ""});
    const [error, setError] = useState(false);

    const update = (key) => (e) => {
        setForm((f) => ({...f, [key]: e.target.value}));
        if (error) setError(false);
    };

    const submit = (e) => {
        e.preventDefault();
        if (!form.firstName.trim() || !form.email.trim() || !form.message.trim()) {
            setError(true);
            return;
        }
        const subject = `Anfrage von ${form.firstName} ${form.lastName}`.trim() + ` - ${form.email}`;
        window.location.href = `mailto:${getContactMail()}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(form.message)}`;
    };

    return (
        <form onSubmit={submit} noValidate className="rounded-[2rem] bg-white p-6 hairline card-shadow sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
                <div>
                    <label htmlFor="first-name" className={label}>{t("firstname")}</label>
                    <input id="first-name" name="first-name" type="text" autoComplete="given-name" placeholder="Max"
                           value={form.firstName} onChange={update("firstName")} className={field} required/>
                </div>
                <div>
                    <label htmlFor="last-name" className={label}>{t("lastname")}</label>
                    <input id="last-name" name="last-name" type="text" autoComplete="family-name" placeholder="Mustermann"
                           value={form.lastName} onChange={update("lastName")} className={field}/>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="email-address" className={label}>{t("mail")}</label>
                    <input id="email-address" name="email-address" type="email" autoComplete="email" placeholder="muster@mail.com"
                           value={form.email} onChange={update("email")} className={field} required/>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className={label}>{t("message")}</label>
                    <textarea id="message" name="message" rows={5} placeholder="Hi Marvin…"
                              value={form.message} onChange={update("message")} className={`${field} resize-y`} required/>
                </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className={`text-sm transition ${error ? "text-rose" : "text-ink-3"}`} aria-live="polite">
                    {error ? (
                        <>{t("error.text.1")} <span className="font-semibold">{t("error.text.2")}</span> {t("error.text.3")}</>
                    ) : (
                        t("hint")
                    )}
                </p>
                <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-base font-medium text-white transition hover:bg-black"
                >
                    <Emoji src={EmailEmoji} className="h-5"/> {t("write")}
                    <BsArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/>
                </button>
            </div>
        </form>
    )
}

export default function Contact() {
    const {t} = useTranslation("common");

    const channels = [
        {label: t("work.contact.meeting"), value: "cal.com/marvin", href: "https://cal.com/marvin-hulsmann-rjtji3/30min", icon: MemoEmoji, external: true},
    ];
    const channelClass = "group flex items-center gap-4 rounded-[1.5rem] p-4 transition hover:bg-paper";

    return (
        <section id="contact" className="scroll-mt-20 bg-paper py-24 sm:py-32 md:py-40">
            <div className="mx-auto max-w-7xl px-6">
                <Reveal>
                    <p className="eyebrow">{t("work.form.eyebrow")}</p>
                    <h2 className="mt-4 max-w-3xl font-semibold leading-[0.98] tracking-display text-[clamp(2.4rem,6vw,5.5rem)]">
                        {t("work.form.title")}
                    </h2>
                    <p className="mt-5 max-w-xl text-xl text-ink-2">{t("work.form.sub")}</p>
                </Reveal>

                <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-8">
                    <Reveal className="lg:col-span-7" delay={0.05}>
                        <ContactForm/>
                        <p className="mt-6 text-lg leading-relaxed text-ink-2">
                            {t("work.info.text.1")} <span className="font-semibold text-ink">{t("work.info.text.2")}</span> {t("work.info.text.3")}
                        </p>
                    </Reveal>

                    <div className="flex flex-col gap-4 lg:col-span-5">
                        <Reveal delay={0.1} className="relative aspect-[4/5] overflow-hidden rounded-[2rem] card-shadow sm:aspect-[5/4] lg:aspect-[4/5]">
                            <Image src={Photo} alt="Marvin in den Alpen" fill placeholder="blur"
                                   sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover"/>
                        </Reveal>

                        <Reveal delay={0.15} className="rounded-[2rem] bg-white p-2 hairline">
                            <ProtectedMail placeholder={t("contact.mail.placeholder")} className={`${channelClass} cursor-pointer`}>
                                {(value) => (
                                    <>
                                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-paper group-hover:bg-white">
                                            <Emoji src={EmailEmoji} className="h-7"/>
                                        </span>
                                        <span className="min-w-0 flex-1">
                                            <span className="block text-sm text-ink-3">{t("work.contact.mail")}</span>
                                            <span className="block truncate font-medium">{value ?? t("contact.mail.placeholder")}</span>
                                        </span>
                                        <BsArrowUpRight className="h-4 w-4 text-ink-3 transition group-hover:text-ink"/>
                                    </>
                                )}
                            </ProtectedMail>
                            {channels.map((c) => (
                                <a
                                    key={c.label}
                                    href={c.href}
                                    target={c.external ? "_blank" : undefined}
                                    rel={c.external ? "noreferrer" : undefined}
                                    className={channelClass}
                                >
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-paper group-hover:bg-white">
                                        <Emoji src={c.icon} className="h-7"/>
                                    </span>
                                    <span className="min-w-0 flex-1">
                                        <span className="block text-sm text-ink-3">{c.label}</span>
                                        <span className="block truncate font-medium">{c.value}</span>
                                    </span>
                                    <BsArrowUpRight className="h-4 w-4 text-ink-3 transition group-hover:text-ink"/>
                                </a>
                            ))}
                            <div className="flex items-center justify-between gap-4 p-4">
                                <span className="text-sm text-ink-3">{t("work.contact.socials")}</span>
                                <div className="flex gap-2">
                                    {SOCIALS.map(({name, href, Icon}) => (
                                        <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name}
                                           className="flex h-10 w-10 items-center justify-center rounded-full bg-paper text-ink transition hover:bg-ink hover:text-white">
                                            <Icon className="h-5 w-5"/>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    )
}
