import Head from 'next/head'
import Navbar from '../components/navbar'
import Popover from "../components/popover";

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
                    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                        <div className="flex space-x-4">
                            <div className="rounded-full animate-pulse bg-blue-400 h-12 w-12"/>
                            <div className="flex-1 py-1">
                                <p className="text-white shadow pb-2">In naher <code>Zukunft</code> verfügbar!</p>
                                <div className="space-y-2 animate-pulse">
                                    <div className="h-4 bg-blue-400 rounded"/>
                                    <div className="h-4 bg-blue-400 rounded w-5/6"/>
                                </div>
                            </div>
                        </div>
                    </div>
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

