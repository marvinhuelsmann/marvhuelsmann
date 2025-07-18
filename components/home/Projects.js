import {
    ExternalLinkIcon,
} from '@heroicons/react/outline'
import useSWR from 'swr'

const API_URL = "https://api.github.com/users/marvinhuelsmann/repos"
import {BsChevronCompactRight, BsChevronCompactLeft} from 'react-icons/bs';
import {useState} from "react";
import {useTranslation} from "next-i18next";

async function fetcher(url) {
    const res = await fetch(url);
    return await res.json();
}

const realtimeProjects = [
    {
        name: "DoThis",
        homepage: 'https://apps.apple.com/de/app/dothis/id6744120353',
        description: "Die ultimative AI Reisebegleiter-App für unvergessliche Abenteuer rund um den Globus.",
        language: "Swift"
    },
    {
        name: "MH - Creations",
        homepage: 'https://mhcreations.de',
        description: "Einzigartige und personalisierte Webseiten für dein Unternehmen.",
        language: "Unternehmen"
    },
    {
        name: "Textosy",
        homepage: 'https://apps.apple.com/de/app/textosy/id6479321960',
        description: "visionOS App, die die Texterstellung revolutioniert - immersive 3D Texte.",
        language: "Unternehmen"
    },
    {
        name: "BookyTrack",
        homepage: 'https://apps.apple.com/de/app/textosy/id6479989211',
        description: "watchOS-App für Bücherliebhaber. Markiere Seiten, lese mühelos weiter.",
        language: "Unternehmen"
    },
    {
        name: "MemoJournal",
        homepage: 'https://apps.apple.com/de/app/memojournal/id6502835696',
        description: "innovative iOS Tagebuch-App, die Ihre Stimme nutzt, um Ihre Gedanken mit KI festzuhalten.",
        language: "Unternehmen"
    },
    {
        name: "Transporter",
        homepage: 'https://transporter-git-main-marvinhuelsmann.vercel.app',
        description: "Ein Datei Transporter um Bilder oder Ordner schnell und sicher zu transportieren.",
        language: "Javascript"
    },
]



export function GitHubProjects() {
    const {data, error} = useSWR(API_URL, fetcher);
    const [hasPressed, setPressed] = useState(false);

    function scrollLeft() {
        const scrollElement = document.getElementById('scroller');
        const scrollAmount = 9000;

        setPressed(false)
        scrollElement.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }

    function scrollRight() {
        const scrollElement = document.getElementById('scroller');
        const scrollAmount = 200;

        scrollElement.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        setPressed(true)
    }

    const { t } = useTranslation('common')

    if (error) return (
        <div className={"container pt-12 -mb-7"}>
            <div className={"mt-12 -mb-6"}>
                <p className={"pt-1 text-md leading-tight text-gray-300 text-center"}>Weitere Daten konnten nicht geladen
                    werden,<br/> da keine{' '}
                    <span className={"font-bold"}>Internetverbindung</span> besteht und<br/> diese von <span className={"font-bold"}>GitHub</span> geladen werden.</p>
                <div className={"flex justify-center pt-3"}>
                    <div className={"bg-gray-400 w-9 bg-opacity-90 rounded-3xl h-10 animate-pulse absolute mt-1"}/>
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
        <div className="lg:pl-0 md:pl-0 text-white">


            <div id={"projects"}>
                <div id={"s"} className={"xl:pt-20 md:pt-16 pt-8"}>
                    <div className={"xl:ml-10 md:ml-10 ml-3.5 mb-10"}>
                        <span className={"p-5 rounded-2xl shadow bg-zinc-800 text-2xl font-medium text-white"}>{t('projects.public')}</span>
                    </div>

                    <div id={"scroller"} className="flex mt-5 snap-x mx-auto snap-mandatory h-96 w-[calc(100vw-16px)] space-x-5 overflow-scroll overflow-y-hidden no-scrollbar pl-5 pr-10 ">
                        {realtimeProjects.map((project) => project.homepage && (
                            <div key={project.name} className="snap-center items-center justify-center w-96 h-screen">
                                <div className={"p-10 h-96 w-96 bg-zinc-800/95 rounded-2xl"}>
                                    <h1 className={"font-medium text-red-500/90 text-4xl"}>
                                        {project.name}.
                                    </h1>
                                    <h2 className={"text-4xl font-medium text-white"}>
                                        {project.description}
                                    </h2>

                                    <div className="relative pt-4">
                                        <div className="flex bottom-0 right-0 ...">
                                            <a href={project.homepage} target={"_blank"} className={"font-thin text-blue-200 rounded backdrop-filter bg-blue-800 hover:bg-blue-700 transition p-2 text-3xl"}>
                                                {t('projects.discover')}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {data.map((project) => !project.homepage && !project.archived && project.name !== 'marvinhuelsmann' && project.name !== 'Financy' && (
                            <div key={project.name} className="snap-center items-center justify-center w-96 h-screen">
                                <div className={"p-10 h-96 w-96 bg-zinc-800/95 rounded-2xl"}>
                                    <h1 className={"font-medium text-yellow-400/95 text-4xl"}>
                                        {project.name}.
                                    </h1>
                                    <h2 className={"text-4xl font-medium text-white"}>
                                        {project.description}
                                    </h2>



                                    <div className="relative pt-4">
                                        <div className="flex bottom-0 right-0 ...">
                                            {(project.homepage !== "" &&
                                            <a href={project} target={"_blank"} className={"font-thin text-blue-200 rounded backdrop-filter bg-blue-800 hover:bg-blue-700 transition p-2 text-3xl"}>
                                                {t('projects.discover')}
                                            </a>
                                            )}
                                            {(project.homepage === "" &&
                                                <a href={project.html_url} target={"_blank"} className={"font-thin text-blue-200 rounded backdrop-filter bg-blue-800 hover:bg-blue-700 transition p-2 text-3xl"}>
                                                    {t('projects.discover')}
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {data.map((project) => project.homepage && !project.archived && project.name !== 'tailwindcss.com' && project.name !== 'marvhuelsmann' && (
                            <div key={project.name} className="snap-center items-center justify-center w-96 h-screen">
                                <div className={"p-10 h-96 w-96 bg-zinc-800/95 rounded-2xl"}>
                                    <h1 className={"font-medium text-blue-400/95 text-4xl"}>
                                        {project.name}.
                                    </h1>
                                    <h2 className={"text-4xl font-medium text-white"}>
                                        {project.description}
                                    </h2>

                                    <div className="relative pt-4">
                                        <div className="flex bottom-0 right-0 ...">
                                            <a href={project.homepage} target={"_blank"} className={"font-thin text-blue-200 rounded backdrop-filter bg-blue-800 hover:bg-blue-700 transition p-2 text-3xl"}>
                                                {t('projects.discover')}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="absolute xl:right-5 md:right-5 right-3 self-center ">
                            <div className="bg-zinc-600 bg-opacity-50 backdrop-blur-2xl rounded-full flex ">
                                <BsChevronCompactRight onClick={scrollRight} className={"text-white w-12 h-12 text-2xl p-1 shadow"}/>
                            </div>
                        </div>

                        {hasPressed && (
                            <div className="absolute xl:left-1 md:-left-2 -left-3 self-center transition ease-in">
                            <div className="bg-zinc-600 bg-opacity-50 backdrop-blur-2xl rounded-full flex ">
                            <BsChevronCompactLeft onClick={scrollLeft} className={"text-white w-8 h-8 text-2xl p-1 shadow"}/>
                              </div>
                             </div>
                            )}

                    </div>
                </div>


            </div>


            <div className={"xl:pl-10 md:pl-10 pl-4 mt-8 font-thin"}>
                <p className={"text-gray-100"}>{t('projects.footnote.text.1')} <span className={"underline font-thin"}>{t('projects.footnote.text.2')}</span> {t('projects.footnote.text.3')}</p>
            </div>

            <div className={"xl:pl-10 md:pl-10 pl-4 mt-0 text-white"}>
                <div className={"mt-0"}>
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
                    {t('projects.footnote.github.text.1')} <strong>{t('projects.footnote.github.text.2')}</strong>.
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
