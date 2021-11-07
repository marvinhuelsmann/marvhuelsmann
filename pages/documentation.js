import Head from 'next/head'
import Navbar from '../components/Navbar'
import {useEffect} from "react";

const productivity = [
    {name: "Apple Erinnerungen", link: "https://apps.apple.com/de/app/erinnerungen/id1108187841"},
    {name: "Apple Notizen", link: "https://apps.apple.com/de/app/notizen/id1110145109"},
    {name: "Apple Music", link: "https://music.apple.com"},
]

const development = [
    {name: "PhpStorm", link: "https://www.jetbrains.com/de-de/phpstorm/"},
    {name: "IntelliJ ", link: "https://www.jetbrains.com/de-de/idea/"},
    {name: "Figma", link: "https://figma.com"},
    {name: "Vercel", link: "https://vercel.com"},
    {name: "Firebase", link: "https://firebase.google.com"},
]

const hardware = [
    {name: "Apple MacBook Pro (2020, M1, 13″)", link: "https://www.apple.com/macbook-pro-13/"},
    {name: "Apple AirPods Pro", link: "https://www.apple.com/airpods-pro/"},
]

export function callbackAnimation(entries) {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn-withOutZoom");
        } else entry.target.classList.remove("animate-fadeIn-withOutZoom");
    });
}

export default function Documentation() {
    useEffect(() => {
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
                <div className={"bg-gradient-to-r from-purple-300 via-indigo-500 to-green-800  flex flex-col items-center justify-center w-full flex-1 px-20 text-center"}>
                    <div className="mt-64 mb-64">
                        <h1 className="xl:text-7xl text-shadow md:text-6xl text-4xl text-white">
                            <strong>Meine Dokumentation</strong>
                        </h1>
                        <h1 className="xl:text-4xl md:text-4xl text-3xl opacity-90 text-white">
                            Du willst wissen mit welchen Tools ich arbeite und mag, das alles und mehr erfährst du hier...
                        </h1>
                    </div>
                </div>
                <div className={"mt-10"}>
                    <div className={"flex xl:pl-7 pl-2"}>
                        <h2 className={"text-dark dark:text-white xl:text-5xl text-3xl"}>
                            <strong>Wie geht es mir?</strong>
                        </h2>
                    </div>
                    <div className={"text-center pt-3"}>
                        <p className={"text-gray-800 justify-center text-left font-normal xl:text-2xl md:text-1xl text-xl pl-4 max-w-7xl"}>
                            Hey, mir geht es gut, wie geht es dir? Dies ist meine neues Portfolio und auf dieser
                            Dokumentationsseite lernst
                            du alle wichtigen Sachen über mich kennen.</p>
                    </div>
                </div>
                <div className={"text-center flex flex-col justify-center font-normal xl:text-2xl md:text-1xl text-xl"}>
                    <div className={"mt-12"}>
                        <h2 className={"text-dark dark:text-white text-center xl:text-7xl text-5xl"}>
                            <strong><span className={"bg-indigo-200 dark:bg-indigo-400 bg-opacity-20 dark:bg-opacity-50"}>Tools und Gadgets</span> mit den ich jeden Tag arbeite!</strong>
                        </h2>
                        <div className={"mt-12 show-on-scroll"} id={"productivity"}>
                            <div className={"flex justify-center"}>
                                <h2 className={"text-dark dark:text-white italic xl:text-5xl text-3xl"}>
                                    <strong>Für die Produktivität:</strong>
                                </h2>
                            </div>
                            <div className={"justify-center flex text-center mt-3"}>
                                {productivity.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.link}
                                        target={"_blank"}
                                        className="p-2 flex text-center rounded-lg hover:bg-gray-100"
                                    >
                                        <div
                                            className={"text-gray-500 text-normal"}>{item.name}</div>
                                    </a>)
                                )}
                            </div>
                        </div>
                        <div id={"development"} className={"show-on-scroll"}>
                            <div className={"flex justify-center mt-16"}>
                                <h2 className={"text-dark dark:text-white flex text-center justify-center italic xl:text-5xl text-3xl"}>
                                    <strong>Für die Entwicklung/Software:</strong>
                                </h2>
                            </div>
                            <div className={"flex justify-center mt-3"}>
                                {development.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.link}
                                        target={"_blank"}
                                        className="p-2 flex rounded-lg hover:bg-gray-100"
                                    >
                                        <div
                                            className={"text-gray-500 text-normal"}>{item.name}</div>
                                        <div className={"xl:visible md:visible invisible"}> {item.description}</div>
                                    </a>)
                                )}
                            </div>
                        </div>
                        <div id={"hardware"} className={"show-on-scroll"}>
                            <div className={"flex justify-center mt-16 xl:pl-7 pl-2"}>
                                <h2 className={"text-dark dark:text-white italic xl:text-5xl text-3xl"}>
                                    <strong>Meine Hardware:</strong>
                                </h2>
                            </div>
                            <div className={"flex text-center justify-center mt-3"}>
                                {hardware.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.link}
                                        target={"_blank"}
                                        className="p-2 flex rounded-lg hover:bg-gray-100"
                                    >
                                        <div
                                            className={"text-gray-500 text-normal"}>{item.name}</div>
                                        {item.description}
                                    </a>)
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            <footer className="flex bg-white mt-10 items-center justify-center w-full h-24">
                <a
                    className="flex items-center justify-center"
                    href="https://marvhuelsmann.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/LogoSmall.svg" alt="MH Logo" className="h-14 ml-2"/>
                </a>
            </footer>
        </div>
    )
}