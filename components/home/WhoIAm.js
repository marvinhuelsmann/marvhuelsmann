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
import ImageInformation from "./Contact";
import {Trans, useTranslation} from "next-i18next";

export default function WhoIAmView() {
    const { t } = useTranslation('common')
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
                    animate={{y: 70}}
                    transition={{delay: 0.2, duration: 2.5, type: "spring", stiffness: 100}}
                    whileInView={{opacity: 1}}
                    className={"xl:ml-48 md:ml-16 ml-8 xl:pr-24 md:pr-10"}>
                    <h1 className={"container xl:text-7xl md:text-6xl text-4xl font-medium xl:text-left md:text-left text-left text-white mb-32 "}>

                        {t('whoiam.text.1')} <img className={"inline xl:h-16 md:h-12 h-8 align-baseline"} src={StudentEmoji.src}
                                     alt={"Student"}/> {t('whoiam.text.2')}<br/> {t('whoiam.text.3')}
                        {' '}<img className={"inline xl:h-16 md:h-12 h-8 align-baseline"} src={DeveloperEmoji.src}
                                  alt={"Developer"}/> {t('whoiam.text.4')}
                        {t('whoiam.text.5')} <img className={"inline xl:h-16 md:h-12 h-8 align-baseline"}
                                                      src={RollerCoasterEmoji.src} alt={"Rollercoaster"}/>
                        {' '}{t('whoiam.text.6')} <img className={"inline xl:h-16 md:h-12 h-8"} src={PizzaEmoji.src}
                                                         alt={"Pizza"}/>
                    </h1>
                </motion.div>

                <ImageInformation/>
            </motion.div>
        </div>
    )
}
