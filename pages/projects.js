import Head from 'next/head'
import Navbar from '../components/Navbar'
import {useEffect} from "react";
import {
    ExternalLinkIcon,
} from '@heroicons/react/outline'
import useSWR from 'swr'

const API_URL = "https://api.github.com/users/marvinhuelsmann/repos"

async function fetcher(url) {
    const res = await fetch(url);
    return await res.json();
}

function AchievedBadge({isArchived}) {
    if (isArchived) {
        return (
            <div className={"text-yellow-600 font-normal pl-2 hover:text-yellow-400 dark:hover:text-yellow-300"}>
                (Archiviert)
            </div>
        )
    }
    return (
        <></>
    )
}

function ProjectLanguage({language}) {
    if (language !== "" && language !== null) {
        return (
            <div>
                <div
                    className="pt-1 font-medium text-gray-200 bg-gray-500 rounded-md w-24 text-center opacity-70 shadow-lg dark:text-gray-300">
                    {language}
                </div>
            </div>
        )
    } else return (
        <div>
            <div
                className="pt-1 font-medium text-gray-200 bg-gray-500 rounded-md w-24 text-center opacity-70 shadow-lg dark:text-gray-300">
                Text
            </div>
        </div>
    )
}

function WebsiteLink({link}) {
    if (link !== "") {
        return (
            <a target={"_blank"} href={link}><ExternalLinkIcon
                className="h-5 w-5 dark:text-gray-700 text-gray-300 hover:text-gray-500 dark:hover:text-gray-500"
                aria-hidden="true"/></a>
        )
    } else return (
        <></>
    )
}

export function callbackAnimation(entries) {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn-withOutZoom");
        } else entry.target.classList.remove("animate-fadeIn-withOutZoom");
    });
}

export function GitHubProjects() {
    const {data, error} = useSWR(API_URL, fetcher);

    if (error) return <div className={"dark:text-white"}>failed to load</div>;
    if (!data) return <div className={"dark:text-white"}>loading...</div>;

    return (
        <div className="mt-4">
            <div className="mx-auto grid items-center flex justify-center">
                <div>
                    <h2 className="text-3xl mt-5 font-extrabold tracking-tight text-gray-900 dark:text-gray-400 sm:text-4xl">GitHub
                        Repositories</h2>
                    <p className="mt-4 text-gray-500 dark:text-gray-300">
                        Hier siehst du meine öffentlichen GitHub Projekte, diese kannst du hier einsehen und auf GitHub
                        bei Bedarf bearbeiten, neue Features mit einbringen oder ein Fehler melden. Diese Seite wird
                        ständig aktualisiert und die Daten werden von GitHub bereitgestellt.
                    </p>

                    <dl className="mt-12 grid grid-cols-1 gap-x-2 sm:grid-cols-2 gap-y-8 lg:gap-x-4">
                        {data.map((project) => (
                            <div key={project.name} className="border-t border-gray-200 pt-3">
                                <dt className="font-bold text-gray-900 dark:text-gray-400 flex">{project.name}
                                    <AchievedBadge isArchived={project.archived}/> <WebsiteLink
                                        link={project.homepage}/></dt>
                                <dd className="pt-1 font-medium text-gray-500 dark:text-gray-300">{project.description} </dd>
                                <ProjectLanguage language={project.language}/>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className={"text-black pl-0 mt-4 dark:text-white"}>
                    <hr className={"pl-2"}/>
                    <div className={"mt-3"}>
                <span className="relative inline-flex h-2 w-2 mr-2 mt-0.5">
                    <span
                        className="
                        animate-ping absolute inline-flex
                         h-full w-full rounded-full
                         bg-green-300 dark:bg-green-300"/>
                  <span className="
                  relative inline-flex rounded-full h-2 w-2
                   bg-green-300 dark:bg-green-300"/>
               </span>
                        Live-Daten von der <strong>GitHub API</strong>.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    useEffect(() => {

        // On page scroll animations
        const callbackSmall = function (entries) {
            callbackAnimation(entries, false)
        };

        const observerSmall = new IntersectionObserver(callbackSmall)

        const targetsSmall = document.querySelectorAll(".show-on-scroll");
        targetsSmall.forEach(function (targetsSmall) {
            targetsSmall.classList.add("opacity-0");
            observerSmall.observe(targetsSmall);
        });

        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    })
    return (
        <div className="min-h-screen py-2 dark:bg-black">
            <Head>
                <title>Marvin Hülsmann</title>
                <link rel="icon" href="https://i.ibb.co/FV5xHPz/Logo-Extra-Big.png"/>
                <link href="https://fonts.googleapis.com/css?family=DM+Sans:400,500|Jost:400,500,600&display=swap"
                      rel="stylesheet"/>
            </Head>

            <Navbar/>

            <main>
                <div
                    className={"bg-gradient-to-r from-purple-300 via-indigo-500 to-green-800  flex flex-col items-center justify-center w-full flex-1 px-20 text-center"}>
                    <div className="mt-64 mb-64">
                        <h1 className="xl:text-7xl text-shadow md:text-6xl text-4xl text-white">
                            <strong>Meine Projekte</strong>
                        </h1>
                    </div>
                </div>
                <div className={"mt-7"}>
                    <div className={"flex show-on-scroll xl:pl-7 pl-2 xl:pr-7 pr-2"}>
                        <GitHubProjects/>
                    </div>
                </div>
            </main>

            <div className={"text-center mt-10 items-center flex flex-col justify-center bg-gray-200"}>
                <p className={"text-gray-600 pb-4 mb-2 pt-5 text-center items-center flex-col justify-center"}>
                    <strong>◊</strong> Die GitHub Repositories Beschreibungen sind aufgrund das alle meine Referenzen auf GitHub in Englisch verfasst worden sind, und dies nur eine Kopie davon ist, in Englisch.
                </p>

                <a
                    className="flex items-center justify-center mb-2"
                    href="https://marvin.monster"
                    rel="noopener noreferrer"
                >
                    <img src="/LogoSmall.svg" alt="MH Logo" className="h-14"/>
                </a>
            </div>
        </div>
    )
}