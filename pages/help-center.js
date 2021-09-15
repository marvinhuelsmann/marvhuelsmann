import Head from 'next/head'
import Navbar from '../components/Navbar'
import ContactForm from "../components/ContactForm";

export default function HelpCenter() { return (
    <div className="min-h-screen py-2">
        <Head>
            <title>Marvin Hülsmann</title>
            <link rel="icon" href="/public/LogoExtraBig.svg"/>
            <link href="https://fonts.googleapis.com/css?family=DM+Sans:400,500|Jost:400,500,600&display=swap"
                  rel="stylesheet"/>
        </Head>

        <Navbar/>

        <main>
            <div className={"bg-gradient-to-r from-purple-200 via-indigo-600 to-green-700  flex flex-col items-center justify-center w-full flex-1 px-20 text-center"}>
                <div className="mt-64 mb-64">
                    <h1 className="xl:text-7xl text-shadow md:text-6xl text-4xl text-white">
                        <strong>Hilfe Center</strong>
                    </h1>
                </div>
            </div>
            <div className={"mt-10"}>
                <h2 className={"text-dark ml-4 xl:text-5xl text-3xl"}>
                    <strong>Alle Fragen an einem Ort</strong>
                </h2>
            </div>
        </main>


        <footer className="flex bg-white items-center justify-center w-full h-24 ">
            <a
                className="flex items-center justify-center"
                href="https://marhuelsmann.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="/LogoSmall.svg" alt="MH Logo" className="h-14 ml-2"/>
            </a>
        </footer>
    </div>
)}