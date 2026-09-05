import {useRef, useState} from "react";
import useSWR from "swr";
import {useTranslation} from "next-i18next";
import {motion} from "framer-motion";
import {BsArrowUpRight, BsChevronLeft, BsChevronRight, BsStar} from "react-icons/bs";
import {RiGithubFill} from "react-icons/ri";
import Reveal, {Stagger, Item} from "../motion/Reveal";
import {FEATURED, PLATFORM_STYLE, LANGUAGE_COLOR} from "./projects.data";

const API_URL = "https://api.github.com/users/marvinhuelsmann/repos?per_page=100&sort=pushed";
const EXCLUDED = new Set(["marvinhuelsmann", "marvhuelsmann", "Financy", "tailwindcss.com"]);

const fetcher = async (url) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`GitHub ${res.status}`);
    return res.json();
};

function FeaturedCard({project, index, t}) {
    const style = PLATFORM_STYLE[project.platform] || PLATFORM_STYLE.web;
    return (
        <motion.a
            href={project.homepage}
            target="_blank"
            rel="noreferrer"
            whileHover={{y: -6}}
            transition={{type: "spring", stiffness: 260, damping: 24}}
            className="group relative flex h-[26rem] w-[82vw] shrink-0 snap-start flex-col overflow-hidden rounded-[2rem] bg-white p-7 hairline card-shadow sm:w-[24rem] sm:p-8 md:h-[27rem]"
        >
            <div aria-hidden="true"
                 className={`absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${style.gradient} opacity-25 blur-2xl transition-all duration-700 group-hover:opacity-50 group-hover:scale-125`}/>

            <div className="relative flex items-center justify-between">
                <span className={`inline-flex items-center rounded-full bg-gradient-to-r ${style.gradient} px-3 py-1 text-xs font-semibold text-white`}>
                    {t(style.label)}
                </span>
                <span className="text-sm tabular-nums text-ink-3">{String(index + 1).padStart(2, "0")}</span>
            </div>

            <div className="relative mt-auto">
                <h3 className="font-semibold leading-none tracking-display text-[2.4rem] sm:text-[2.75rem]">
                    {project.name}<span className="text-accent">.</span>
                </h3>
                <p className="mt-4 text-lg leading-snug text-ink-2">{project.description}</p>
            </div>

            <div className="relative mt-8 flex items-center justify-between">
                <span className="text-sm font-medium text-ink">{t("projects.discover")}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white transition-transform duration-500 group-hover:rotate-45">
                    <BsArrowUpRight className="h-4 w-4"/>
                </span>
            </div>
        </motion.a>
    )
}

function RepoCard({repo}) {
    const href = repo.homepage || repo.html_url;
    const color = LANGUAGE_COLOR[repo.language] || "#8e8e93";
    return (
        <Item>
            <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-3xl bg-white p-5 hairline transition duration-500 hover:-translate-y-1 hover:card-shadow"
            >
                <div className="flex items-start justify-between gap-3">
                    <h4 className="truncate text-lg font-semibold tracking-tight">{repo.name}</h4>
                    <BsArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-ink-3 transition group-hover:text-ink"/>
                </div>
                <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-ink-2">
                    {repo.description || "—"}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-ink-3">
                    {repo.language && (
                        <span className="inline-flex items-center gap-1.5">
                            <span className="h-2.5 w-2.5 rounded-full" style={{background: color}}/>
                            {repo.language}
                        </span>
                    )}
                    {repo.stargazers_count > 0 && (
                        <span className="inline-flex items-center gap-1"><BsStar className="h-3 w-3"/>{repo.stargazers_count}</span>
                    )}
                </div>
            </a>
        </Item>
    )
}

function GitHubGrid() {
    const {t} = useTranslation("common");
    const {data, error} = useSWR(API_URL, fetcher, {revalidateOnFocus: false});

    const repos = Array.isArray(data)
        ? data
            .filter((r) => !r.archived && !r.fork && !EXCLUDED.has(r.name))
            .sort((a, b) => (b.stargazers_count - a.stargazers_count) || (new Date(b.pushed_at) - new Date(a.pushed_at)))
            .slice(0, 8)
        : [];

    return (
        <div className="mt-24 md:mt-32">
            <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="eyebrow flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"/>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"/>
                        </span>
                        {t("projects.live")}
                    </p>
                    <p className="mt-2 text-lg text-ink-2">{t("projects.live.sub")}</p>
                </div>
                <a
                    href="https://github.com/marvinhuelsmann"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 self-start rounded-full bg-white px-4 py-2 text-sm font-medium hairline transition hover:card-shadow"
                >
                    <RiGithubFill className="h-4 w-4"/> {t("projects.open")}
                </a>
            </Reveal>

            {error && (
                <div className="mt-8 rounded-3xl bg-white p-8 text-center hairline">
                    <p className="text-lg font-medium">{t("projects.error")}</p>
                    <p className="mt-1 text-ink-2">{t("projects.error.sub")}</p>
                </div>
            )}

            {!error && !data && (
                <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label={t("projects.loading")}>
                    {Array.from({length: 8}).map((_, i) => (
                        <div key={i} className="h-40 rounded-3xl skeleton"/>
                    ))}
                </div>
            )}

            {repos.length > 0 && (
                <Stagger className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" step={0.05}>
                    {repos.map((r) => <RepoCard key={r.id} repo={r}/>)}
                </Stagger>
            )}
        </div>
    )
}

export default function Projects() {
    const {t} = useTranslation("common");
    const scroller = useRef(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    const onScroll = () => {
        const el = scroller.current;
        if (!el) return;
        setAtStart(el.scrollLeft < 8);
        setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
    };

    const scrollBy = (dir) => {
        const el = scroller.current;
        if (!el) return;
        const card = el.querySelector("a");
        const amount = card ? card.getBoundingClientRect().width + 20 : 400;
        el.scrollBy({left: dir * amount, behavior: "smooth"});
    };

    return (
        <section id="projects" className="relative scroll-mt-20 bg-paper py-24 sm:py-32 md:py-40">
            <div className="mx-auto max-w-7xl px-6">
                <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="eyebrow">{t("projects.eyebrow")}</p>
                        <h2 className="mt-4 font-semibold leading-[0.98] tracking-display text-[clamp(2.4rem,6vw,5.5rem)]">
                            {t("projects.title")}
                        </h2>
                        <p className="mt-5 max-w-xl text-xl text-ink-2">{t("projects.sub")}</p>
                    </div>
                    <div className="hidden items-center gap-2 md:flex">
                        <button
                            type="button"
                            onClick={() => scrollBy(-1)}
                            disabled={atStart}
                            aria-label="Previous"
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-white hairline transition hover:card-shadow disabled:opacity-30"
                        >
                            <BsChevronLeft className="h-4 w-4"/>
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollBy(1)}
                            disabled={atEnd}
                            aria-label="Next"
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-white hairline transition hover:card-shadow disabled:opacity-30"
                        >
                            <BsChevronRight className="h-4 w-4"/>
                        </button>
                    </div>
                </Reveal>
            </div>

            <Reveal delay={0.1} className="mt-12">
                <div
                    ref={scroller}
                    onScroll={onScroll}
                    className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6 pt-2 [scroll-padding-inline:1.5rem] md:[padding-inline:max(1.5rem,calc((100vw-80rem)/2+1.5rem))] md:[scroll-padding-inline:max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
                >
                    {FEATURED.map((p, i) => <FeaturedCard key={p.name} project={p} index={i} t={t}/>)}
                    <div className="w-2 shrink-0" aria-hidden="true"/>
                </div>
                <p className="mx-auto mt-2 max-w-7xl px-6 text-sm text-ink-3 md:hidden">
                    {t("projects.footnote.text.1")} <span className="underline decoration-coral/40 underline-offset-4">{t("projects.footnote.text.2")}</span> {t("projects.footnote.text.3")}
                </p>
            </Reveal>

            <div className="mx-auto max-w-7xl px-6">
                <GitHubGrid/>
            </div>
        </section>
    )
}
