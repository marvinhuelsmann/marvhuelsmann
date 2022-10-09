import {
    ExternalLinkIcon,
} from '@heroicons/react/outline'
import useSWR from 'swr'

const API_URL = "https://api.github.com/users/marvinhuelsmann/repos"

async function fetcher(url) {
    const res = await fetch(url);
    return await res.json();
}

const realtimeProjects = [
    {
        name: "Transporter",
        homepage: 'https://transportier.ml',
        description: "Ein Datei Transporter um Bilder oder Ordner schnell und sicher zu transportieren.",
        language: "Javascript"
    },
    {
        name: "SparkyShop",
        homepage: 'https://sparkyshop.de',
        description: "SparkyShop, eine schnelle und übersichtliche Schnellansicht über Produkte.",
        language: "Javascript"
    },
]


function AchievedBadge({isArchived}) {
    if (isArchived) {
        return (
            <div
                className={"text-yellow-600 font-normal pl-2 hover:text-yellow-400 dark:hover:text-yellow-300 text-xl"}>
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
                className="h-5 pl-1 w-5 dark:text-gray-700 text-gray-300 hover:text-gray-500 dark:hover:text-gray-500"
                aria-hidden="true"/></a>
        )
    } else return (
        <></>
    )
}

export function GitHubProjects() {
    const {data, error} = useSWR(API_URL, fetcher);

    if (error) return (
        <div className={"container pt-12 -mb-7"}>
            <div className="mx-auto grid items-center flex justify-center">
                <div className={"xl:pl-0 md:pl-4 pl-3 xl:pr-0 md:pr-4 pr-3"}>
                    <span
                        className={"bg-white text-black p-2 rounded-2xl shadow bg-opacity-70"}>Aktuelle Projekte</span>
                    <dl className=" grid grid-cols-1 gap-x-2 sm:grid-cols-2 gap-y-8 lg:gap-x-4">
                        {realtimeProjects.map((project) => project.homepage && (
                            <div key={project.name} className=" border-gray-200 pt-3">
                                <dt className="font-bold text-gray-200 shadow text-3xl flex">{project.name}
                                    <AchievedBadge isArchived={project.archived}/> <WebsiteLink
                                        link={project.homepage}/></dt>
                                <dd className=" font-medium text-gray-300">{project.description} </dd>
                                <ProjectLanguage language={project.language}/>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
            <div className={"mt-12 -mb-6"}>
                <p className={"pt-1 text-white text-sm text-gray-300 text-center"}>Weitere Daten konnten nicht geladen
                    werden,<br/> da keine
                    Internetverbindung besteht.</p>
                <div className={"flex justify-center pt-3"}>
                    <div className={"mb-5 h-12 w-4 pl-4 pr-4 bg-gray-400 animate-spin rounded-xl"}/>
                </div>

            </div>
        </div>
    );
    if (!data) return (
        <div>
            <div className={"text-white"}>Daten werden geladen...</div>
            <div className={"flex justify-center pt-3"}>
                <div className={"mb-5 h-12 w-4 pl-4 pr-4 bg-gray-400 animate-spin rounded-xl"}/>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen mt-4 lg:pl-0 md:pl-0 pl-2 text-white">
            <div className="mx-auto grid items-center flex justify-center">
                <div className={"xl:pl-0 md:pl-4 pl-3 xl:pr-0 md:pr-4 pr-3"}>
                    <span
                        className={"bg-white text-black p-2 rounded-2xl shadow bg-opacity-70"}>Neustes</span>
                    <dl className=" grid grid-cols-1 gap-x-2 sm:grid-cols-2 gap-y-8 lg:gap-x-4">
                        {realtimeProjects.map((project) => project.homepage && (
                            <div key={project.name} className=" border-gray-200 pt-3">
                                <dt className="font-bold text-gray-200 shadow text-3xl flex">{project.name}
                                    <AchievedBadge isArchived={project.archived}/> <WebsiteLink
                                        link={project.homepage}/></dt>
                                <dd className=" font-medium text-gray-300">{project.description} </dd>
                                <ProjectLanguage language={project.language}/>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>

            <hr className={"pl-2 mt-7 -mb-3"}/>

            <div className="mx-auto grid items-center flex justify-center">
                <div className={"pt-12"}>
                    <span className={"bg-white text-black p-2 rounded-2xl shadow bg-opacity-70"}>Community Projekte</span>
                    <dl className=" grid grid-cols-1 gap-x-2 sm:grid-cols-2 gap-y-8 lg:gap-x-4">
                        {data.map((project) => project.homepage && !project.archived && project.name !== 'tailwindcss.com' && project.name !== 'marvhuelsmann' && (
                            <div key={project.name} className=" border-gray-200 pt-3">
                                <dt className="font-bold text-gray-200 shadow text-3xl flex">{project.name}
                                    <AchievedBadge isArchived={project.archived}/> <WebsiteLink
                                        link={project.homepage}/></dt>
                                <dd className=" font-medium text-gray-300">{project.description} </dd>
                                <ProjectLanguage language={project.language}/>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>

            <hr className={"pl-2 mt-7 -mb-3"}/>

            <div className="mx-auto grid items-center flex justify-center">
                <div className={"pt-12"}>
                    <span
                        className={"bg-white text-black p-2 rounded-2xl shadow bg-opacity-70"}>Andere Projekte</span>
                    <dl className=" grid grid-cols-1 gap-x-2 sm:grid-cols-2 gap-y-8 lg:gap-x-4">
                        {data.map((project) => !project.homepage && !project.archived && project.name !== 'marvinhuelsmann' && (
                            <div key={project.name} className=" border-gray-200 pt-3">
                                <a href={project.html_url} target={"_blank"}>
                                    <dt className="font-bold text-gray-200 shadow text-3xl flex">{project.name}
                                        <AchievedBadge isArchived={project.archived}/> <WebsiteLink
                                            link={project.homepage}/></dt>
                                    <dd className=" font-medium text-gray-300">{project.description} </dd>
                                    <ProjectLanguage language={project.language}/>
                                </a>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>

            <div className={"pl-0 mt-12 text-white"}>
                <hr className={"pl-2"}/>
                <div className={"mt-3"}>
                <span className="relative inline-flex h-2 w-2 mr-2 mt-0.5">
                    <span
                        className="
                        animate-ping absolute inline-flex
                         h-full w-full rounded-full
                         bg-green-300"/>
                  <span className="
                  relative inline-flex rounded-full h-2 w-2
                   bg-green-300"/>
               </span>
                    Live-Daten von der <strong>GitHub API</strong>.
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    return (
        <div className="py-2">
            <div className={"mt-7"}>
                <div className={"flex show-on-scroll justify-center"}>
                    <GitHubProjects/>
                </div>
            </div>
        </div>
    )
}
