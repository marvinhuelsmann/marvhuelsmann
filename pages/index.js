import Head from 'next/head'
import Navbar from '../components/Navbar'
import {useEffect, useState} from "react";
import Image from 'next/image'

import MarvinImage from '/public/IMG_9815.jpeg'

import {motion, useMotionValue, useScroll, useTransform, useViewportScroll} from "framer-motion";


export default function Home() {
    const [ar, setAR] = useState('ar')
    const {scrollYProgress} = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

    useEffect(() => {
        const a = document.createElement("a");
        if (a.relList.supports("ar")) {
            setAR(true)
        } else {
            setAR(false)
        }

        return scrollYProgress.onChange((latest) => {
            console.log(latest * 10)
        })

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
                <title>Marvin Hülsmann</title>
                <link rel="icon" href="https://i.imgur.com/duXild5.png"/>

                <link href="https://fonts.cdnfonts.com/css/sf-pro-display" rel="stylesheet"/>
            </Head>

            <main className={"mb-10"}>
                <div
                    className="flex justify-center mb-5">
                    <div className="xl:mt-64 mt-24 mb-4">
                        <motion.div
                            whileInView="visible"
                            style={{scaleY: scale}}
                        >
                            <span
                                className={"flex text-gray-400 xl:text-3xl md:text-2xl text-xl text-center justify-center"}>In eine neue Richtung mit
                            </span>
                            <h2 className="text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-400 to-red-600 flex mx-auto font-medium xl:text-9xl md:text-8xl text-5xl">
                                Marvin Hülsmann
                            </h2>
                        </motion.div>
                    </div>
                </div>
                <div className={"flex overflow-hidden"}>
                    <motion.div
                        style={{scale: scale}}
                        className={"bg-black overflow-hidden xl:mb-80 md:mb-56 mb-40 pb-1 w-full h-full"}
                    >
                        <motion.div
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            className={"xl:pt-96 md:pt-56 flex justify-center pt-24 mb-24"}>
                            <div className={" justify-center mx-auto w-7/12 h-8/12 xl:pt-32 md:pt-32 pt-12 pb-16"}>
                                <Image title={"Marvin Image"} placeholder="blur"
                                       alt={"Ron"}
                                       src={MarvinImage}/>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
                <div className={"xl:mt-56 md:mt-48 mt-36 justify-center mx-auto"}>
                    <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}>
                        <h1 className={"text-6xl flex justify-center items-center text-center text-black mb-32 mx-auto"}>
                            Schüler
                            <br/>
                            Entwickler
                            <br/>
                            Unternehmer
                        </h1>
                    </motion.div>
                    <div className={"-mb-2"}>
                        <p className={"flex justify-center text-center mx-auto text-gray-500"}>
                            Dies ist meine neue Portfolioseite, in der ein paar Informationen<br className={"xl:block md:block hidden"}/> über meiner Person erfahren kannst und erfährst wie du mich kontaktieren kannst.
                        </p>
                    </div>
                </div>
            </main>
        </div>

    )
}

