import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Imprint() {
    return (
        <div className="min-h-screen py-2">
            <Head>
                <title>Marvin Hülsmann</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Navbar/>

            <main className="w-full text-center">

                <div className={"bg-black flex flex-col px-20 flex-1 items-center justify-center"}>
                    <div className="mt-64 mb-64">
                        <h1 className="text-7xl text-white text-bold">
                            Kontakt
                        </h1>
                        <h1 className="text-4xl opacity-90 text-white">
                            Du möchtest mich kontaktieren, dann hier!
                        </h1>
                    </div>
                </div>

                <div className={"mb-32 mt-32"}>
                    <h1 className="drop-shadow-2xl opacity-90 font-bold xl:text-9xl md:text-8xl text-5xl text-black text-white text-bold">
                        Kontakt
                    </h1>
                </div>

            </main>

            <footer className="flex bg-white items-center justify-center w-full h-24 border-t">
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