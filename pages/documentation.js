import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Imprint() { return (
    <div className="min-h-screen py-2">
        <Head>
            <title>Marvin Hülsmann</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>

        <Navbar/>

        <main className="bg-black flex flex-col items-center justify-center w-full flex-1 px-20 text-center">

            <div className="mt-64 mb-64">
                <h1 className="text-7xl text-white">
                    Dokumentation
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
)}