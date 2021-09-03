import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Imprint() { return (
    <div className="min-h-screen py-2">
        <Head>
            <title>Marvin Hülsmann</title>
            <link rel="icon" href="/public/LogoExtraBig.svg"/>
            <link href="https://fonts.googleapis.com/css?family=DM+Sans:400,500|Jost:400,500,600&display=swap"
                  rel="stylesheet"/>
        </Head>

        <Navbar/>

        <main>
            <div className={"bg-gradient-to-r from-purple-300 via-indigo-500 to-green-800  flex flex-col items-center justify-center w-full flex-1 px-20 text-center"}>
                <div className="mt-64 mb-64">
                    <h1 className="xl:text-7xl text-shadow md:text-6xl text-4xl text-white">
                        <strong>Impressum</strong>
                    </h1>
                </div>
            </div>
            <div className={"mt-10"}>
                <div className={"flex xl:pl-7 pl-2"}>
                    <h2 className={"text-dark xl:text-5xl text-3xl"}>
                        <strong>Inhaber</strong>
                    </h2>
                </div>
                <div className={"justify-center text-center"}>
                    <h2 className="xl:text-2xl md:text-xl text-md opacity-80 text-black">
                        Marvin Hülsmann
                    </h2>
                    <h2 className="xl:text-2xl md:text-xl text-md opacity-70 text-black">
                        Nelkenstraße 17, 59073 Hamm
                    </h2>
                    <h2 className="xl:text-2xl md:text-xl text-md opacity-70 text-black">
                        mail@marvhuelsmann.com
                    </h2>
                    <p className={"text-xs"}>
                    for marvhuelsmann.de, marvhuelsmann.com, labyhelp.de, marv.link,
                    <br/>
                    directly.click, yourweb.monster, marvin.monster, ron.monster, joni.monster, homy.fun, geosights.eu
                    </p>
                </div>
            </div>
            <div className={"mt-10"}>
                <div className={"flex mb-1 text-center justify-center"}>
                    <h2 className={"text-dark xl:text-5xl text-3xl"}>
                        <strong>Hinweis gemäß Online-Streitbeilegungs-Verordnung</strong>
                    </h2>
                </div>
                <div className={"justify-center text-center"}>
                    <h2 className="xl:text-xl md:text-md text-sm opacity-70 text-black">
                        Die Europäische Kommission stellt eine Plattform für die außergerichtliche Online-Streitbeilegung (OS-Plattform) bereit, aufrufbar unter <a target={"_blank"} className={"text-gray-600"} href={"https://ec.europa.eu/odr"}>https://ec.europa.eu/odr</a>.
                    </h2>
                </div>
            </div>
        </main>

        <footer className="flex mt-10 bg-white items-center justify-center w-full h-24">
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
)}