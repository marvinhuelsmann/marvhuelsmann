import Head from 'next/head'
import Navbar from '../components/Navbar'
import Popover from "../components/Popover";
import {useEffect} from "react";

import Image from 'next/image'
import IpadImage from '../public/IpadSelf.png'

export function getHelloWord() {
    const helloWords =
        ["Bonjour", "Hej", "Ciao", "Tach", "Hăo", "Moinsen", "こんにちは", "Hello", "Salut", "Olá", "Merhaba"]

    return helloWords[Math.floor(Math.random() * helloWords.length)];
}

export function callbackAnimation(entries, longAnimation) {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            if (longAnimation) {
                entry.target.classList.add("animate-fadeInLong");
            } else entry.target.classList.add("animate-fadeIn");
        } else {
            if (longAnimation) {
                entry.target.classList.remove("animate-fadeInLong");
            } else entry.target.classList.remove("animate-fadeIn");
        }
    });
}

export default function Home() {
    useEffect(() => {
        const callbackSmall = function (entries) {
            callbackAnimation(entries, false)
        };
        const callbackLong = function (entries) {
            callbackAnimation(entries, true)
        };

        const observerSmall = new IntersectionObserver(callbackSmall)
        const observerLong = new IntersectionObserver(callbackLong)

        const targetsSmall = document.querySelectorAll(".show-on-scroll");
        targetsSmall.forEach(function (targetsSmall) {
            targetsSmall.classList.add("opacity-0");
            observerSmall.observe(targetsSmall);
        });
        const targetsLong = document.querySelectorAll(".show-on-scroll-long");
        targetsLong.forEach(function (targetsLong) {
            targetsLong.classList.add("opacity-0");
            observerLong.observe(targetsLong);
        });
    })

    return (
        <div className="min-h-screen py-2">
            <Head>
                <title>Marvin Hülsmann</title>
                <link rel="icon" href="/LogoExtraBig.svg"/>

                <link href="https://fonts.googleapis.com/css?family=DM+Sans:400,500|Jost:400,500,600&display=swap" rel="stylesheet"/>

            </Head>

            <Navbar/>

            <main>
                <div
                    className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                    <div className="xl:mt-60 mt-32 xl:mb-60 mb-32">
                        <h2 className="text-white drop-shadow-2xl opacity-90 font-bold xl:text-9xl md:text-8xl text-5xl">
                            {getHelloWord()}¹, ich bin Marvin
                        </h2>
                        <Popover/>
                    </div>
                </div>

                <div className="xl:mt-52 xl:mb-36 md:mt-36 mt-24 mb-24 show-on-scroll">
                    <div className="bg-white">
                        <h2 className="text-dark mb-3 text-center items-center flex flex-col justify-center drop-shadow-2xl opacity-90 font-bold xl:text-9xl md:text-8xl text-5xl">
                            und das bin ich
                        </h2>
                        <Image className="show-on-scroll-long  items-center object-cover flex flex-col justify-center" src={IpadImage}
                               alt="Ipad image from Marvin"/>
                        <h1 className="text-dark items-center mt-10 flex flex-col justify-center drop-shadow-2xl font-normal xl:text-8xl md:text-7xl text-4xl">
                            🤯
                        </h1>
                        <h2 className="text-dark items-center mt-2 flex flex-col justify-center drop-shadow-2xl opacity-20 font-normal xl:text-8xl md:text-7xl text-4xl">
                            ja, das bin ich!!!
                        </h2>
                        <h4 className="text-dark items-center mt-3 flex flex-col justify-center drop-shadow-2xl opacity-40 font-normal xl:text-4xl md:text-3xl text-2xl">
                            Du glaubst mir noch nicht? <a className="text-blue-900 pt" href="/documentation">dann erfahre
                            hier mehr...</a>
                        </h4>
                    </div>
                </div>

                <div className="bg-black mb-32 flex show-on-scroll">
                    <div className="pl-7">
                        <h1 className="text-white mb-3 mt-10 font-bold xl:text-9xl md:text-8xl text-5xl">
                            Also glaubst du mir doch?
                        </h1>
                        <h4 className="text-white mb-10 font-normal xl:text-7xl md:text-6xl text-3xl">
                            dann kannst du mich jetzt <a className="text-blue-400" href="/contact">kontaktieren</a>.
                        </h4>
                    </div>
                </div>

                <div className="mb-24 xl:pt-6 md:pt-6 pt-4 items-center flex flex-col justify-center show-on-scroll">
                    <h3 className="text-dark items-center flex flex-col justify-center mb-3 drop-shadow-2xl opacity-90 font-bold xl:text-8xl md:text-7xl text-center text-5xl">
                        ...und für Developer 🚀
                    </h3>
                    <h4 className="text-dark items-center flex flex-col justify-center mb-6 font-normal xl:text-6xl md:text-5xl text-3xl">
                        gibt es hier mein <a className="text-blue-500" target={"_blank"}
                                             href="https://github.com/marvinhuelsmann">GitHub Profil</a>
                    </h4>
                </div>

            </main>

            <div className={"text-center items-center flex flex-col justify-center bg-gray-200"}>
                <p className={"text-gray-600 pb-4 mb-2 pt-5 text-center items-center flex-col justify-center"}>
                    <strong>◊</strong> Diese Seite befasst sich über mich (Marvin Hülsmann), bitte beachte das dieser
                    Stand der Seite nur eine Beta ist. Fehler oder unbearbeiteten Seiten können existieren.
                    <br/>
                    <strong>1.</strong> Begrüßungswort auf einer fremden und oder Muttersprache.
                </p>

                <a
                    className="flex items-center justify-center mb-2"
                    href="https://marvin.monster"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/LogoSmall.svg" alt="MH Logo" className="h-14"/>
                </a>
            </div>
        </div>
    )
}

