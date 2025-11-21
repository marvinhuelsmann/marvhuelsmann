import {motion} from "framer-motion";
import Image from "next/image";
import Image1 from "../../public/StandUpMarvin2.jpeg";
import MapWidgetImage from "../../public/MapsWidgetIcon.svg";
import ImageModal from "./Image/ImageModal";
import Contact from "./Contact"
import {Dialog, Transition} from '@headlessui/react'
import {Fragment, useState} from 'react'
import {BiLinkAlt} from 'react-icons/bi';
import {useTranslation} from "next-i18next";


export default function ImageInformation() {
    const { t } = useTranslation('common')

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-full"
        >
            <div className="container mx-auto px-4 xl:grid md:grid grid-cols-2 gap-8 justify-center items-start pt-16 mb-24">
                <div className="w-full relative flex justify-center">
                    <Image
                        placeholder="blur"
                        alt="Marvin Image"
                        src={Image1}
                        className="rounded-2xl drop-shadow-2xl shadow"
                    />
                </div>

                <div className="flex flex-col justify-start pl-4 xl:pr-16 md:pr-4 pr-4">
                    <h1 className="font-bold text-gray-50 xl:text-8xl md:text-7xl text-5xl pt-10">
                        {t('contact.clean')}
                    </h1>

                    <Contact/>

                    <div className="pt-8">
                        <p className="text-white xl:text-4xl md:text-4xl text-2xl">
                            {t('work.info.text.1')} <span className="font-bold">{t('work.info.text.2')}</span> {t('work.info.text.3')}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
