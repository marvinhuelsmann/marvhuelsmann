import Head from 'next/head'
import Navbar from '../components/Navbar'
import {useEffect, useState} from "react";

import Image from 'next/image'
import IpadImage from '../public/IpadWithMemoji.png'
import OpenAIView from "../components/OpenAIView";
import Countdown, {zeroPad} from "react-countdown";

export function getHelloWord() {
    const helloWords =
        ["Bonjour", "Hej", "Ciao", "Tach", "Hăo", "Moinsen", "こんにちは", "Hello", "Salut", "Olá", "Merhaba", "Shalom", "გამარჯობა"]

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
        const [ar, setAR] = useState('ar')

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

        const a = document.createElement("a");
        if (a.relList.supports("ar")) {
            setAR(true)
        } else {
            setAR(false)
        }

        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    })
    const CompletionMessage = () => <span className={"font-bold text-4xl"}>Bitte warten...</span>;

    // Renderer callback with condition
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <CompletionMessage />;
        } else {
            // Render a countdown
            return <span className={"xl:text-9xl text-6xl font-bold"}>{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</span>;
        }
    };

    return (
        <div className="min-h-screen dark:bg-black">
            <Head>
                <title>Marvin Hülsmann</title>
                <link rel="icon" href="https://i.imgur.com/duXild5.png"/>

                <link href="https://fonts.googleapis.com/css?family=DM+Sans:400,500|Jost:400,500,600&display=swap"
                      rel="stylesheet"/>
            </Head>


            <main className={"dark:bg-black dark:text-white text-black flex h-screen justify-center items-center"}>
                <a
                    className="absolute xl:pt-44 md:pt-28 pt-24 justify-center"
                    href="https://www.linkedin.com/in/marvin-hülsmann-9892201b5/"
                    rel="noopener noreferrer"
                >
                    <img src="/Logo-Extra-Big-Red.png" alt="MH Logo" className="h-14"/>
                </a>
                <Countdown renderer={renderer} className={"dark:text-white text-center text-black font-bold text-5xl justify-center shadow"} date={new Date(1665426600 * 1000)}>
                    <CompletionMessage className={"dark:text-white text-black"}/>
                </Countdown>

            </main>
        </div>

    )
}

