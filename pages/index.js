'use client'
import Head from 'next/head'
import {useEffect, useState} from "react";

import {motion, useScroll, useTransform} from "framer-motion";
import WhoIAmView from "../components/home/WhoIAm";
import Projects from "../components/home/Projects";
import Footer from "../components/Footer";
import {useTranslation} from "next-i18next";

export function getHelloWord() {
    const helloWords =
        ["Guten Tag", "Hi", "Bonjour", "Hej", "Ciao", "Tach", "Hăo", "Moinsen", "こんにちは", "Hello", "Salut", "Olá", "Merhaba", "Shalom", "გამარჯობა"]

    return helloWords[Math.floor(Math.random() * helloWords.length)];
}

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
            ])),
        },
    }
}

export default function Home() {
    const [ar, setAR] = useState('ar')
    const {scrollYProgress} = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

    const { t } = useTranslation('common')

    useEffect(() => {
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
    }, [scale])

    return (
        <div className="min-h-screen">
            <Head>
                <title>Marvin Hülsmann - Webentwickler in Berlin</title>
                <meta name="description" content="Marvin Hülsmann, bieten persönlich erstellte Websiten an. Diese werden nach Wunsch gestaltet."/>
                <link rel="icon" href="https://i.imgur.com/duXild5.png"/>

                <link href="https://fonts.cdnfonts.com/css/sf-pro-display" rel="stylesheet"/>
            </Head>

            <main className={"mb-10"}>
                <div
                    className="container mx-auto px-4 mb-5">
                    <div className="xl:mt-64 mt-24 mb-4">
                        <motion.div
                            whileInView="visible"
                            style={{scaleY: scale}}
                        >
                            <span
                                className={"flex text-gray-400 xl:text-3xl md:text-2xl text-xl text-left justify-left"}>{t('hi')}
                            </span>
                            <h2 className="text-transparent text-left bg-clip-text bg-gradient-to-r from-blue-400 to-red-600 flex mx-auto font-medium xl:text-9xl md:text-8xl text-5xl">
                                Marvin Hülsmann
                            </h2>
                        </motion.div>
                    </div>
                </div>
                <WhoIAmView/>
                <div className={"justify-center bg-white"}>
                    <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{delay: 0.1, duration: 0.4}}
                        className={"w-full h-auto bg-black"}>
                        <motion.div
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            animate={{ y: 0 }}
                            transition={{ ease: "easeIn", duration: 0.6 }}
                            className={"pt-10 mb-14"}>

                            <Projects/>
                        </motion.div>
                       <Footer oneSheetVisible={false} darkLogo={false}/>
                    </motion.div>
                </div>
            </main>
        </div>

    )
}