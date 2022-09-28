import {motion} from "framer-motion";
import StudentEmoji from "../../style/icons/StudentEmoji.png";
import DeveloperEmoji from "../../style/icons/DeveloperEmoji.png";
import RollerCoasterEmoji from "../../style/icons/RollerCoasterEmoji.png"
import PizzaEmoji from "../../style/icons/PizzaEmoji.png"
import ElephantEmoji from "../../style/icons/ElephantEmoji.png"
import SteakEmoji from "../../style/icons/SteakEmoji.png"
import Image from "next/image";
import MarvinImage from "../../public/IMG_9815.jpeg";
import PointingToYou from "../../style/icons/PointingToYouEmoji.png";


export default function WhoIAmView() {
    return (
        <div className={"w-full bg-gray-500"}>
            <motion.div
                initial={{opacity: 0}}
                transition={{ delay: 0.4, duration: 1.5 }}
                whileInView={{opacity: 1}}
                className={"w-full h-full bg-blue-600 pb-1"}
            >
                <motion.div
                    initial={{opacity: 0}}
                    animate={{ y: 70 }}
                    transition={{ delay: 0.2, duration: 2.5, type: "spring", stiffness: 100 }}
                    whileInView={{opacity: 1}}
                    className={"xl:ml-48 md:ml-16 ml-8 xl:pr-24 md:pr-10"}>
                    <h1 className={"container xl:text-7xl md:text-6xl text-4xl font-medium xl:text-left md:text-left text-left text-white mb-32 "}>
                        Ich bin <img className={"inline xl:h-16 md:h-12 h-8 align-baseline"} src={StudentEmoji.src} alt={"Student"}/> und mache Abitur. Nebenbei beschäftige ich mich mit
                        {' '}<img className={"inline xl:h-16 md:h-12 h-8 align-baseline"} src={DeveloperEmoji.src} alt={"Developer"}/> und programmiere und designe Webseiten.
                        Außerdem fahre ich gerne  <img className={"inline xl:h-16 md:h-12 h-8 align-baseline"} src={RollerCoasterEmoji.src} alt={"Rollercoaster"}/>
                        {' '}und esse gerne leckere <img className={"inline xl:h-16 md:h-12 h-8"} src={PizzaEmoji.src} alt={"Pizza"}/>.
                    </h1>
                </motion.div>
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: true}}
                    className={"xl:pt-36 md:pt-44 mb-24 xl:grid md:grid grid-cols-2 justify-center items-start space-x-3.5"}>
                    <div className={"w-full h-94 xl:pl-36 md:pl-10 pl-10 pr-10 -pb-8 flex justify-center"}>
                        <Image title={"Marvin Image"} placeholder="blur"
                               alt={"Marvin Image"}
                               src={MarvinImage}
                               className={"rounded-2xl drop-shadow-2xl shadow"} />
                    </div>
                    <div className={"pl-4"}>
                        <h1 className={"font-bold xl:pt-0 md:pt-0 pt-10 text-gray-50 xl:text-8xl md:text-7xl text-5xl"}>
                            Das bin ich.
                        </h1>
                        <p className={"text-white xl:text-5xl md:text-5xl text-4xl"}>
                            Ich bin <span className={"font-bold"}>17 Jahre</span> alt und komme aus <a href={"#"} className={"text-indigo-300 font-bold hover:cursor-pointer"}>Hamm</a> in Nordrhein-Westfalen.
                            Besuche die 12 Klasse eines beruflichen Gymnasium und intressiere mich für Informatik und Technik. Eines meiner Schwerpunkte liegt auf die Gestaltung und die Interaktion mit Webseiten.
                        </p>
                        <div className={"pt-8"}>
                            <a href={"mailto:kontakt@marvhuelsmann.com"} className={"text-3xl"}>E-Mail schreiben</a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}
