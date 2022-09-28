import Head from 'next/head'
import {useEffect, useState} from "react";


import {motion, useMotionValue, useScroll, useTransform, useViewportScroll} from "framer-motion";
import WhoIAmView from "../components/home/WhoIAm";

export function getHelloWord() {
    const helloWords =
        ["Bonjour", "Hej", "Ciao", "Tach", "Hăo", "Moinsen", "こんにちは", "Hello", "Salut", "Olá", "Merhaba", "Shalom", "გამარჯობა"]

    return helloWords[Math.floor(Math.random() * helloWords.length)];
}

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
                                className={"flex text-gray-400 xl:text-3xl md:text-2xl text-xl text-left justify-left"}>{getHelloWord()}, ich heiße
                            </span>
                            <h2 className="text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-400 to-red-600 flex mx-auto font-medium xl:text-9xl md:text-8xl text-5xl">
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
                        className={"w-full h-full bg-black pb-1"}>
                        <motion.div
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            animate={{ y: 0 }}
                            transition={{ ease: "easeIn", duration: 0.6 }}
                            className={"pt-10 mb-32"}>
                            <h1 className={"text-8xl font-bold flex justify-center items-center text-center text-white mx-auto"}>
                                Sicher ist sicher
                            </h1>
                            <p className={"flex text-5xl justify-center text-center mx-auto text-gray-200"}>
                                Dies ist meine neue Portfolioseite, in der ein paar Informationen<br
                                className={"xl:block md:block hidden"}/> über meiner Person erfahren kannst und erfährst wie
                                du mich kontaktieren kannst.
                            </p>
                        </motion.div>
                        <div className={""}>
                            <p className={"flex justify-center text-center mx-auto text-gray-500"}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diaur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>

    )
}

