import {motion} from "framer-motion";
import Image from "next/image";
import Image1 from "../../public/IMG_9815.jpeg";
import Image2 from "../../public/IMG_0242.jpeg";
import EmailEmoji from "../../style/icons/EmailEmoji.png";
import {useState} from "react";
import ImageModal from "./Images/ImageModal";

export default function ImageInformation() {
    function calculateAge() {
        const today = new Date();
        const birthDate = new Date("September 11, 2005");
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }



    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            className={"xl:pt-32 md:pt-44 mb-24 xl:grid md:grid grid-cols-2 justify-center items-start space-x-3.5"}>
            <div className={"w-full h-94 xl:pl-36 md:pl-10 pl-10 pr-10 -pb-8 relative justify-center"}>
                <Image placeholder="blur"
                       alt={"Marvin Image"}
                       src={Image1}
                       className={"rounded-2xl drop-shadow-2xl shadow"} />
                <ImageModal className={"absolute"}/>
            </div>
            <div className={"pl-4"}>
                <h1 className={"font-bold xl:pt-0 md:pt-0 pt-10 text-gray-50 xl:text-8xl md:text-7xl text-5xl"}>
                    Das bin ich.
                </h1>
                <p className={"text-white xl:text-5xl md:text-5xl text-4xl"}>
                    Ich bin <span className={"font-bold"}>{calculateAge()} Jahre</span> alt und komme aus <a href={"https://maps.apple.com/?address=Hamm,%20Deutschland&auid=3094865715305345970&ll=51.677569,7.821620&lsp=6489&q=Hamm&_ext=Ch8KBQgEEIEBCgQIBRADCgQIBhADCgQIChAGCgQIVRAHEiYp94+F6BDKSUAxqwZhbveyHkA5Dfs9sU7fSUBBpGyRtBv9H0BQDA%3D%3D"} className={"text-indigo-300 font-bold hover:cursor-pointer"}>Hamm</a> in Nordrhein-Westfalen.
                    Ich besuche die 12 Klasse eines <span className={"font-bold"}>beruflichen Gymnasium</span> und intressiere mich für Informatik und Technik. Eines meiner Schwerpunkte liegt bei der <span className={"font-bold"}>Gestaltung und die Interaktion</span> mit Webseiten.
                </p>
                <div className={"pt-8"}>
                    <a href={"mailto:kontakt@marvhuelsmann.com"} className={"text-3xl"}>
                        <button type="button"
                                className="text-white bg-black items-center hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 text-2xl">
                            <img className={"inline xl:h-8 md:h-12 h-8 pr-2"} src={EmailEmoji.src} alt={"Email"}/> schreiben
                        </button>
                    </a>
                </div>
            </div>
        </motion.div>
    )
}
