import Head from 'next/head'
import Navbar from '../components/Navbar'
import Popover from "../components/Popover";

export default function Home() {
    return (
        <div className="min-h-screen py-2">
            <Head>
                <title>Marvin Hülsmann</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Navbar/>

            <main className="bg-gray-900 flex flex-col items-center justify-center w-full flex-1 px-20 text-center">

                <div className="mt-60 mb-60">
                        <h2 className="text-white drop-shadow-2xl font-bold text-9xl text-strong">Bald Verfügbar</h2>
                    <Popover/>
                </div>
            </main>

            <footer className="flex bg-white items-center justify-center w-full h-24 border-t">
                <a
                    className="flex items-center justify-center"
                    href="https://marvin.monster"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/LogoSmall.svg" alt="Vercel Logo" className="h-14 ml-2"/>
                </a>
            </footer>
        </div>
    )
}

