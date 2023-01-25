import {motion} from "framer-motion";
import StudentEmoji from "../../style/icons/StudentEmoji.png";
import DeveloperEmoji from "../../style/icons/DeveloperEmoji.png";
import RollerCoasterEmoji from "../../style/icons/RollerCoasterEmoji.png"
import PizzaEmoji from "../../style/icons/PizzaEmoji.png"
import ElephantEmoji from "../../style/icons/ElephantEmoji.png"
import SteakEmoji from "../../style/icons/SteakEmoji.png"
import EmailEmoji from "../../style/icons/EmailEmoji.png"
import MarvinImage from "../../public/IMG_9815.jpeg";
import PointingToYou from "../../style/icons/PointingToYouEmoji.png";
import MoneyEmoji from "../../style/icons/MoneyEmoji.png";
import WeightlifterEmoji from "../../style/icons/WeightlifterEmoji.png";
import LoveHandEmoji from "../../style/icons/LoveHandEmoji.png";
import BicepEmoji from "../../style/icons/BicepEmoji.png";
import ImageInformation from "./ImageInformation";

export default function WhoIAmView() {

    return (
        <div className={"w-full bg-orange-900"}>
            <motion.div
                initial={{opacity: 0}}
                transition={{ delay: 0.4, duration: 1.5 }}
                whileInView={{opacity: 1}}
                className={"w-full h-full bg-orange-600 pb-1"}
            >
                <motion.div
                    initial={{opacity: 0}}
                    animate={{ y: 70 }}
                    transition={{ delay: 0.2, duration: 2.5, type: "spring", stiffness: 100 }}
                    whileInView={{opacity: 1}}
                    className={"xl:ml-48 md:ml-16 ml-8 xl:pr-24 md:pr-10"}>
                    <h1 className={"w-full xl:text-8xl md:text-6xl text-5xl font-medium xl:text-left md:text-left text-left text-white mb-32 leading-10"}>
                        <span className={"xl:text-8xl md:text-6xl text-5xl"}>  Deine Ideen + meine Skills = <img className={"inline xl:h-16 md:h-12 h-8 align-baseline"} src={BicepEmoji.src} alt={"BicepEmoji"}/></span>
                        <br/>
                        <br className={"xl:hidden md:hidden block"}/>
                        <span className={"xl:text-7xl md:text-5xl text-4xl"}>Dein Geschick + meine Erfahrung = <img className={"inline xl:h-16 md:h-12 h-8 align-baseline"} src={WeightlifterEmoji.src} alt={"WeightlifterEmoji"}/></span>
                        </h1>
                </motion.div>

                <ImageInformation/>
            </motion.div>
        </div>
    )
}
