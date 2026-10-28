import {useEffect, useState} from "react";
import useSWR from "swr";
import {useTranslation} from "next-i18next";
import {AnimatePresence, motion} from "framer-motion";
import {Dialog, DialogPanel, DialogTitle} from "@headlessui/react";
import {
    BsArrowUpRight, BsStar, BsXLg, BsPhone, BsSmartwatch, BsHeadsetVr, BsGlobe2, BsBriefcase,
} from "react-icons/bs";
import {RiGithubFill} from "react-icons/ri";
import Reveal, {Stagger, Item} from "../motion/Reveal";
import {FEATURED, PLATFORM_STYLE, LANGUAGE_COLOR} from "./projects.data";

const API_URL = "https://api.github.com/users/marvinhuelsmann/repos?per_page=100&sort=pushed";
const EXCLUDED = new Set(["marvinhuelsmann", "marvhuelsmann", "Financy", "tailwindcss.com"]);
const EASE = [0.22, 1, 0.36, 1];

const PLATFORM_ICON = {ios: BsPhone, watch: BsSmartwatch, vision: BsHeadsetVr, web: BsGlobe2, business: BsBriefcase};

/** Bento placement per card on the 3-column grid: the first project leads. */
const SPAN = ["lg:col-span-2 md:col-span-2", "", "", "", "", ""];

const fetcher = async (url) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`GitHub ${res.status}`);
    return res.json();
};

function useRepos() {
    const {data, error} = useSWR(API_URL, fetcher, {revalidateOnFocus: false});
    const repos = Array.isArray(data)
        ? data
            .filter((r) => !r.archived && !r.fork && !EXCLUDED.has(r.name))
            .sort((a, b) => (b.stargazers_count - a.stargazers_count) || (new Date(b.pushed_at) - new Date(a.pushed_at)))
        : [];
    return {repos, error, loading: !error && !data};
}

/* ───────────────────────── Featured bento ───────────────────────── */

function ProjectCard({project, index, t}) {
    const style = PLATFORM_STYLE[project.platform] || PLATFORM_STYLE.web;
    const Icon = PLATFORM_ICON[project.platform] || BsGlobe2;
    const lead = index === 0;

    return (
        <Item className={`${SPAN[index]} h-full`}>
            <a
                href={project.homepage}
                target="_blank"
                rel="noreferrer"
                style={{"--glow": style.glow}}
                className="spotlight group relative flex h-full min-h-[19rem] flex-col overflow-hidden rounded-[2rem] bg-elevated p-7 card-shadow
                           transition-[translate,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5
                           hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_0_0_1px_rgba(var(--glow),0.35),0_30px_80px_-30px_rgba(var(--glow),0.45)] sm:p-8"
            >
                {/* platform light */}
                <div aria-hidden="true"
                     className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-40 transition-[opacity,scale] duration-700 group-hover:scale-125 group-hover:opacity-80"
                     style={{background: `radial-gradient(closest-side, rgba(${style.glow},0.55), transparent)`}}/>
                {/* oversized platform glyph */}
                <Icon aria-hidden="true"
                      className={`pointer-events-none absolute text-white/[0.05] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-rotate-6 group-hover:scale-110 group-hover:text-white/[0.09]
                      ${lead ? "-bottom-10 right-6 h-72 w-72" : "-bottom-8 -right-6 h-44 w-44"}`}/>

                <div className="relative flex items-center justify-between">
                    <span className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${style.gradient} px-3 py-1 text-xs font-semibold text-white`}>
                        <Icon className="h-3 w-3"/> {t(style.label)}
                    </span>
                    <span className="font-mono text-xs tabular-nums text-ink-3">{String(index + 1).padStart(2, "0")}</span>
                </div>

                <div className="relative mt-auto pt-10">
                    <h3 className={`font-semibold leading-none tracking-display text-silver ${lead ? "text-[clamp(2.75rem,5.5vw,4.75rem)]" : "text-[2.25rem] sm:text-[2.5rem]"}`}>
                        {project.name}<span className="text-accent">.</span>
                    </h3>
                    <p className={`mt-4 leading-snug text-ink-2 ${lead ? "max-w-md text-lg sm:text-xl" : "text-base"}`}>{project.description}</p>
                </div>

                <div className="relative mt-7 flex items-center justify-between">
                    <span className="text-sm font-medium text-ink/80 transition group-hover:text-ink">{t("projects.discover")}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-black transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110">
                        <BsArrowUpRight className="h-4 w-4"/>
                    </span>
                </div>
            </a>
        </Item>
    )
}

/** The bento tile that opens the GitHub sheet. */
function GitHubTile({count, loading, onOpen, t}) {
    return (
        <Item className="h-full md:col-span-1 lg:col-span-2">
            <button
                type="button"
                onClick={onOpen}
                className="spotlight group relative flex h-full min-h-[19rem] w-full flex-col overflow-hidden rounded-[2rem] bg-[#0a0a0b] p-7 text-left card-shadow
                           transition-[translate] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 sm:p-8"
            >
                {/* faint contribution-style grid */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-700 group-hover:opacity-100
                     [background-image:radial-gradient(rgba(255,255,255,0.10)_1px,transparent_1.4px)] [background-size:18px_18px]
                     [mask-image:radial-gradient(ellipse_at_80%_20%,#000_10%,transparent_70%)]"/>
                <RiGithubFill aria-hidden="true" className="pointer-events-none absolute -bottom-10 -right-8 h-56 w-56 text-white/[0.05] transition-all duration-700 group-hover:-rotate-6 group-hover:text-white/[0.09]"/>

                <p className="relative flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-3">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70"/>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"/>
                    </span>
                    {t("projects.live")}
                </p>

                <div className="relative mt-auto pt-10">
                    <p className="font-semibold leading-none tracking-display text-silver text-[clamp(2.4rem,4.4vw,3.75rem)]">
                        {loading ? <span className="inline-block h-[0.8em] w-20 rounded-lg skeleton align-middle"/> : count}
                        <span className="ml-3 text-[0.42em] font-medium tracking-tight text-ink-2">
                            {t("projects.repos.count", {count: ""}).trim()}
                        </span>
                    </p>
                    <p className="mt-3 max-w-md text-ink-2">{t("projects.live.sub")}</p>
                </div>

                <span className="relative mt-7 inline-flex items-center gap-2 self-start rounded-full glass px-4 py-2 text-sm font-medium text-ink transition group-hover:bg-white/10">
                    <RiGithubFill className="h-4 w-4"/> {t("projects.repos.cta")}
                </span>
            </button>
        </Item>
    )
}

/* ───────────────────────── GitHub sheet ───────────────────────── */

/** Homebrew tap repos are named homebrew-<tool>; only the tool name is worth showing. */
const displayName = (name) => name.replace(/^homebrew-/, "");

function RepoCard({repo, i}) {
    const href = repo.homepage || repo.html_url;
    const color = LANGUAGE_COLOR[repo.language] || "#8e8e93";
    return (
        <motion.a
            initial={{opacity: 0, y: 14}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, ease: EASE, delay: 0.12 + i * 0.03}}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="spotlight group flex h-full flex-col rounded-3xl bg-white/[0.04] p-5 hairline transition-colors duration-300 hover:bg-white/[0.07]"
        >
            <div className="relative flex items-start justify-between gap-3">
                <h4 className="truncate text-lg font-semibold tracking-tight">{displayName(repo.name)}</h4>
                <BsArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-ink-3 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"/>
            </div>
            <p className="relative mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-ink-2">{repo.description || "—"}</p>
            <div className="relative mt-4 flex items-center gap-4 text-xs text-ink-3">
                {repo.language && (
                    <span className="inline-flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full" style={{background: color}}/>
                        {repo.language}
                    </span>
                )}
                {repo.stargazers_count > 0 && (
                    <span className="inline-flex items-center gap-1"><BsStar className="h-3 w-3"/>{repo.stargazers_count}</span>
                )}
                <span className="ml-auto tabular-nums">{new Date(repo.pushed_at).getFullYear()}</span>
            </div>
        </motion.a>
    )
}

function GitHubSheet({open, onClose, repos, error, loading, t}) {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia("(max-width: 639px)");
        const sync = () => setIsMobile(mq.matches);
        sync();
        mq.addEventListener("change", sync);
        return () => mq.removeEventListener("change", sync);
    }, []);

    return (
        <AnimatePresence>
            {open && (
                <Dialog static open={open} onClose={onClose} className="relative z-[80]">
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.3}}
                        className="fixed inset-0 bg-black/60 backdrop-blur-md"
                        aria-hidden="true"
                    />
                    <div className="fixed inset-0 flex items-end justify-center sm:items-center sm:p-6">
                        <DialogPanel className="w-full sm:max-w-5xl">
                        <motion.div
                            initial={isMobile ? {y: "100%"} : {opacity: 0, y: 30, scale: 0.97}}
                            animate={isMobile ? {y: 0} : {opacity: 1, y: 0, scale: 1}}
                            exit={isMobile ? {y: "100%"} : {opacity: 0, y: 20, scale: 0.98}}
                            transition={{type: "spring", stiffness: 320, damping: 34}}
                            drag={isMobile ? "y" : false}
                            dragConstraints={{top: 0, bottom: 0}}
                            dragElastic={{top: 0, bottom: 0.6}}
                            onDragEnd={(_, info) => { if (info.offset.y > 120 || info.velocity.y > 600) onClose(); }}
                            className="glass relative flex max-h-[88svh] w-full flex-col overflow-hidden rounded-t-[2rem] card-shadow-lg sm:max-h-[85vh] sm:rounded-[2rem]"
                        >
                            {/* grabber */}
                            <div className="flex justify-center pt-3 sm:hidden">
                                <span className="h-1.5 w-10 rounded-full bg-white/25"/>
                            </div>

                            <div className="flex items-start justify-between gap-4 border-b border-white/[0.07] px-6 pb-5 pt-4 sm:px-8 sm:pt-7">
                                <div>
                                    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-3">
                                        <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400"/>
                                        {t("projects.live")}
                                    </p>
                                    <DialogTitle className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                                        {loading ? t("projects.loading") : t("projects.repos.count", {count: repos.length})}
                                    </DialogTitle>
                                </div>
                                <div className="flex items-center gap-2">
                                    <a
                                        href="https://github.com/marvinhuelsmann"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hidden items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-black transition hover:bg-white sm:inline-flex"
                                    >
                                        <RiGithubFill className="h-4 w-4"/> {t("projects.open")}
                                    </a>
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        aria-label={t("projects.close")}
                                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-ink transition hover:bg-white/20"
                                    >
                                        <BsXLg className="h-3.5 w-3.5"/>
                                    </button>
                                </div>
                            </div>

                            <div className="overflow-y-auto overscroll-contain px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4 sm:px-6 sm:pb-6"
                                 onPointerDownCapture={(e) => e.stopPropagation()}>
                                {error && (
                                    <div className="rounded-3xl bg-white/[0.04] p-8 text-center hairline">
                                        <p className="text-lg font-medium">{t("projects.error")}</p>
                                        <p className="mt-1 text-ink-2">{t("projects.error.sub")}</p>
                                    </div>
                                )}
                                {loading && (
                                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" aria-label={t("projects.loading")}>
                                        {Array.from({length: 9}).map((_, i) => <div key={i} className="h-36 rounded-3xl skeleton"/>)}
                                    </div>
                                )}
                                {repos.length > 0 && (
                                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                        {repos.map((r, i) => <RepoCard key={r.id} repo={r} i={i}/>)}
                                    </div>
                                )}
                                <a
                                    href="https://github.com/marvinhuelsmann"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-4 flex items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-medium text-black sm:hidden"
                                >
                                    <RiGithubFill className="h-4 w-4"/> {t("projects.open")}
                                </a>
                            </div>
                        </motion.div>
                        </DialogPanel>
                    </div>
                </Dialog>
            )}
        </AnimatePresence>
    )
}

/* ───────────────────────── Section ───────────────────────── */

export default function Projects() {
    const {t} = useTranslation("common");
    const [open, setOpen] = useState(false);
    const {repos, error, loading} = useRepos();

    return (
        <section id="projects" className="relative scroll-mt-20 overflow-hidden bg-surface py-24 sm:py-32 md:py-40">
            <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(80rem,90%)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent"/>

            <div className="mx-auto max-w-7xl px-6">
                <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="eyebrow">{t("projects.eyebrow")}</p>
                        <h2 className="mt-4 font-semibold leading-[0.98] tracking-display text-silver text-[clamp(2.4rem,6vw,5.5rem)]">
                            {t("projects.title")}
                        </h2>
                        <p className="mt-5 max-w-xl text-xl text-ink-2">{t("projects.sub")}</p>
                    </div>
                    <button
                        type="button"
                        onClick={() => setOpen(true)}
                        className="inline-flex items-center gap-2 self-start rounded-full glass px-4 py-2.5 text-sm font-medium text-ink transition hover:bg-white/10 md:self-auto"
                    >
                        <RiGithubFill className="h-4 w-4"/> {t("projects.live")}
                        {!loading && !error && <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs tabular-nums text-ink-2">{repos.length}</span>}
                    </button>
                </Reveal>

                <Stagger className="mt-12 grid auto-rows-fr gap-4 md:mt-16 md:grid-cols-2 lg:grid-cols-3" step={0.07}>
                    {FEATURED.map((p, i) => <ProjectCard key={p.name} project={p} index={i} t={t}/>)}
                    <GitHubTile count={repos.length} loading={loading} onOpen={() => setOpen(true)} t={t}/>
                </Stagger>
            </div>

            <GitHubSheet open={open} onClose={() => setOpen(false)} repos={repos} error={error} loading={loading} t={t}/>
        </section>
    )
}
