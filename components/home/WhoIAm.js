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
    const { t } = useTranslation('common');

    return (
        <div className="w-full bg-gradient-to-b from-blue-600/65 via-blue-600 to-blue-600 mix-blend-difference rounded-t-full pb-24">
            <motion.div
                initial={{ opacity: 0 }}
                transition={{ delay: 0.4, duration: 1.5 }}
                whileInView={{ opacity: 1 }}
                className="w-full"
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ y: 70 }}
                    transition={{ delay: 0.2, duration: 2.5, type: "spring", stiffness: 100 }}
                    whileInView={{ opacity: 1 }}
                    className="container mx-auto px-4 flex justify-center"
                >
                    <h1 className="xl:text-7xl md:text-6xl text-4xl font-medium mb-32 text-center xl:text-left md:text-left">
                        <span
                            className="bg-gradient-to-r from-blue-300 via-white to-white bg-clip-text text-transparent"
                            style={{
                                backgroundSize: '100% 200%',
                                backgroundPosition: '0 0'
                            }}
                        >
                            {t('whoiam.text.1')} <img className="inline xl:h-16 md:h-12 h-8 align-baseline" src={StudentEmoji.src} alt="Student"/> {t('whoiam.text.2')}
                        </span>
                        <br/>
                        <span
                            className="bg-gradient-to-r from-blue-300 via-blue-100 to-blue-200  bg-clip-text text-transparent"
                            style={{
                                backgroundSize: '100% 200%',
                                backgroundPosition: '0 0'
                            }}
                        >
                            {t('whoiam.text.3')} <img className="inline xl:h-16 md:h-12 h-8 align-baseline" src={DeveloperEmoji.src} alt="Developer"/> {t('whoiam.text.4')}
                        </span>
                        <span
                            className="bg-gradient-to-r from-white via-blue-300 to-white bg-clip-text text-transparent"
                            style={{
                                backgroundSize: '100% 200%',
                                backgroundPosition: '0 0'
                            }}
                        >
                            {t('whoiam.text.5')} <img className="inline xl:h-16 md:h-12 h-8 align-baseline" src={RollerCoasterEmoji.src} alt="Rollercoaster"/> {t('whoiam.text.6')} <img className="inline xl:h-16 md:h-12 h-8" src={PizzaEmoji.src} alt="Pizza"/>
                        </span>
                    </h1>
                </motion.div>

                <div className="container mx-auto -mt-16">
                    <ImageInformation textColor="blue-600"/>
                </div>
            </motion.div>
        </div>
    );
}