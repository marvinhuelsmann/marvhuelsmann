import Head from 'next/head'
import Navbar from '../components/Navbar'

const productivity = [
    {name: "Apple Erinnerungen", description: "Für Erinnerungen", link: "https://apps.apple.com/de/app/erinnerungen/id1108187841"},
    {name: "Apple Notizen", description: "Für Notizen jeglicher Art", link: "https://apps.apple.com/de/app/notizen/id1110145109"},
]

const development = [
    {name: "PhpStorm", description: "Lieblings  Entwicklungsumgebenheit", link: "https://www.jetbrains.com/de-de/phpstorm/"},
    {name: "Apple Music", description: "Um Musik zu hören 🎶", link: "https:/music.apple.com"},
    {name: "Figma", description: "Für Designs", link: "https://figma.com"},
    {name: "Vercel", description: "", link: "https://vercel.com"},
    {name: "Firebase", description: "", link: "https://firebase.google.com"},
    {name: "Amazon Web Services", description: "", link: "https://aws.amazon.com/de/"},
]

const hardware = [
    {name: "Apple MacBook Pro (2020, M1, 13″)", description: "💻", link: "https://www.apple.com/macbook-pro-13/"},
    {name: "Apple AirPods Pro", description: "", link: "https://www.apple.com/airpods-pro/"},
]

export default function Imprint() {
    return (
        <div className="min-h-screen py-2">
            <Head>
                <title>Marvin Hülsmann</title>
                <link rel="icon" href="/public/LogoExtraBig.svg"/>
            </Head>

            <Navbar/>

            <main>
                <div className={"bg-black flex flex-col items-center justify-center w-full flex-1 px-20 text-center"}>
                    <div className="mt-64 mb-64">
                        <h1 className="xl:text-7xl text-shadow md:text-6xl text-4xl text-white">
                            <strong>Meine Dokumentation</strong>
                        </h1>
                    </div>
                </div>
                <div className={"mt-10"}>
                    <div className={"flex xl:pl-7 pl-2"}>
                        <h2 className={"text-dark xl:text-5xl text-3xl"}>
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
                        <h2 className={"text-dark text-center xl:text-7xl text-5xl"}>
                            <strong>Tools die ich nutze.</strong>
                        </h2>
                        <div id={"productivity"}>
                            <div className={"flex mt-10 xl:pl-7 pl-2"}>
                                <h2 className={"text-dark italic xl:text-5xl text-3xl"}>
                                    <strong>Produktivität:</strong>
                                </h2>
                            </div>
                            <div className={"justify-center mt-5"}>
                                {productivity.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.link}
                                        target={"_blank"}
                                        className="p-3 flex rounded-lg hover:bg-gray-50"
                                    >
                                        <div
                                            className={"text-gray-500 text-normal pr-1"}>{item.name}</div>  {item.description}
                                    </a>)
                                )}
                            </div>
                        </div>
                        <div id={"development"}>
                            <div className={"flex mt-10 xl:pl-7 pl-2"}>
                                <h2 className={"text-dar justify-center flex italic xl:text-5xl text-3xl"}>
                                    <strong>Entwicklung/Software:</strong>
                                </h2>
                            </div>
                            <div className={"justify-center mt-5"}>
                                {development.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.link}
                                        target={"_blank"}
                                        className="p-3 flex rounded-lg hover:bg-gray-50"
                                    >
                                        <div
                                            className={"text-gray-500 text-normal pr-1"}>{item.name}</div><div className={"xl:visible md:visible invisible"}> {item.description}</div>
                                    </a>)
                                )}
                            </div>
                        </div>
                        <div id={"hardware"}>
                            <div className={"flex mt-10 xl:pl-7 pl-2"}>
                                <h2 className={"text-dark italic xl:text-5xl text-3xl"}>
                                    <strong>Hardware:</strong>
                                </h2>
                            </div>
                            <div className={"justify-center mt-5"}>
                                {hardware.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.link}
                                        target={"_blank"}
                                        className="p-3 flex rounded-lg hover:bg-gray-50"
                                    >
                                        <div
                                            className={"text-gray-500 text-normal pr-1"}>{item.name}</div> {item.description}
                                    </a>)
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"text-center flex flex-col justify-center font-normal xl:text-2xl md:text-1xl text-xl"}>
                    <div className={"mt-12"}>
                        <h2 className={"text-dark text-center xl:text-7xl text-5xl"}>
                            <strong>Du willst mehr solcher Sachen?</strong>
                        </h2>
                        <p className={"justify-center pt-3 text-center pl-1 pr-1 font-normal xl:text-2xl md:text-1xl text-xl text-gray-800"}>
                            Dann folge mir auf <a href={"https://twitter.com/marvhuelsmann"} target={"_blank"} className={"text-blue-400"}>Twitter</a> oder besuche diese Seite häufig erneut, denn bei mir gibt es immer etwas zu entdecken.</p>
                    </div>
                </div>

            </main>

            <footer className="flex bg-white mt-10 items-center justify-center w-full h-24">
                <a
                    className="flex items-center justify-center"
                    href="https://marvin.monster"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/LogoSmall.svg" alt="MH Logo" className="h-14 ml-2"/>
                </a>
            </footer>
        </div>
    )
}