import Head from 'next/head'
import {useEffect, useState} from "react";

import {motion, useScroll, useTransform} from "framer-motion";
import Skills from "../components/work/Skills";
import Projects from "../components/home/Projects";
import Footer from "../components/Footer";
import References from "../components/work/References";
import Clock from 'react-live-clock';

export default function Home() {
    const {scrollYProgress} = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

    const [currentTime, setCurrentTime] = useState(() => {
        const hour = ("0" + new Date().getHours()).slice(-2);
        const minutes = ("0" + new Date().getMinutes()).slice(-2);
        const seconds = ("0" + new Date().getSeconds()).slice(-2);

        return `${hour}:${minutes}:${seconds}`;
    });


    useEffect(() => {

        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [scale])

    return (
        <div className="min-h-screen">
            <Head>
                <title>Marvin Hülsmann - Webseiten erstellen lassen - Hamm</title>
                <link rel="icon" href="https://i.imgur.com/duXild5.png"/>
                <meta name="description" content="Marvin Hülsmann, bieten persönlich erstellte Websiten an. Diese werden nach Wunsch gestaltet."/>

                <link href="https://fonts.cdnfonts.com/css/sf-pro-display" rel="stylesheet"/>
            </Head>

            <main className={"mb-10"}>
                <div
                    className="flex justify-center mb-5">
                    <div className="xl:mt-48 mt-12 mb-4">
                        <motion.div
                            whileInView="visible"
                            style={{scaleY: scale}}
                        >
                            <span
                                className={"flex text-black xl:text-3xl md:text-2xl text-xl text-left justify-left"}>Mit mir <span className={"underline decoration-orange-400/30 xl:pl-2 xl:pr-2 pr-1 pl-1"}>zusammen</span> arbeiten?
                            </span>
                            <h2 className="text-transparent text-center bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 flex mx-auto font-medium xl:text-9xl md:text-8xl text-6xl">
                                Definitiv.
                            </h2>
                        </motion.div>
                    </div>
                </div>
                <Skills/>
                <div className={"justify-center bg-black bg-blend-color-dodge"}>
                    <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{delay: 0.1, duration: 0.4}}
                        className={"w-full h-auto bg-white"}>
                        <motion.div
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            animate={{ y: 0 }}
                            transition={{ ease: "easeIn", duration: 0.6 }}
                            className={"pt-10 mb-14"}>
                            <h1 className={"xl:text-8xl text-7xl text-6xl font-bold flex justify-center items-center text-center text-black mx-auto"}>
                                Wieso ich?
                            </h1>
                            <p className={"pt-2 flex xl:text-5xl md:text-4xl text-3xl justify-center text-center mx-auto text-black"}>
                                aufmerksam, reaktionsschnell, zuverlässig, Detail verliebt,<br className={"xl:block md:block hidden"}/> anpassungsfähig, aufnahmefähig, ehrgeizig
                            </p>

                            <References/>
                        </motion.div>
                        <Footer darkLogo={true} oneSheetVisible={true}/>
                    </motion.div>
                </div>
            </main>
        </div>

    )
}