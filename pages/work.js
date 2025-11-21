import Head from 'next/head'
import {useEffect, useState} from "react";

import {motion, useScroll, useTransform} from "framer-motion";
import Skills from "../components/work/Skills";
import Projects from "../components/home/Projects";
import Footer from "../components/Footer";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
                "contact"
            ])),
        },
    }
}

export default function Home() {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

    const { t } = useTranslation('common')

    useEffect(() => {
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

            <main className="mb-10">
                <div className="container mx-auto px-4 flex mb-5">
                    <div className="xl:mt-48 mt-12 mb-4 w-full">
                        <motion.div
                            whileInView="visible"
                            style={{ scaleY: scale }}
                        >
                            <span className="flex text-black xl:text-3xl md:text-2xl text-xl text-left justify-left">
                                {t('work.definitely.text.1')}
                                <span className="underline decoration-orange-400/30 xl:pl-2 xl:pr-2 pr-1 pl-1">
                                    {t('work.definitely.text.2')}
                                </span>
                                {t('work.definitely.text.3')}
                            </span>
                            <h2 className="text-transparent text-center bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 flex mx-auto font-medium xl:text-9xl md:text-8xl text-6xl">
                                {t('work.definitely')}
                            </h2>
                        </motion.div>
                    </div>
                </div>

                <Skills/>

                <div className="w-full bg-blend-color-dodge">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="container mx-auto px-4 mt-10 h-auto bg-white"
                    >
                        <Footer darkLogo={true} oneSheetVisible={true}/>
                    </motion.div>
                </div>
            </main>
        </div>
    )
}