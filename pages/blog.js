import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Blog() { return (
    <div className="min-h-screen py-2">
        <Head>
            <title>Marvin Hülsmann</title>
            <link rel="icon" href="https://i.ibb.co/FV5xHPz/Logo-Extra-Big.png"/>
            <link href="https://fonts.googleapis.com/css?family=DM+Sans:400,500|Jost:400,500,600&display=swap"
                  rel="stylesheet"/>
        </Head>

        <Navbar/>

        <main className="bg-gradient-to-r from-purple-300 via-indigo-500 to-green-800  flex flex-col items-center justify-center w-full flex-1 px-20 text-center">

            <div className="mt-64 mb-64">
                <h1 className="text-7xl text-white">
                    Blog
                </h1>
            </div>

        </main>

        <footer className="flex bg-white items-center justify-center w-full h-24 border-t">
            <a
                className="flex items-center justify-center"
                href="https://marvhuelsmann.com"
                rel="noopener noreferrer"
            >
                <img src="/LogoSmall.svg" alt="MH Logo" className="h-14 ml-2"/>
            </a>
        </footer>
    </div>
)}