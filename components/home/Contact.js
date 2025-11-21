import {motion} from "framer-motion";
import Image from "next/image";
import Image1 from "../../public/StandUpMarvin.jpeg";
import EmailEmoji from "../../style/icons/EmailEmoji.png";
import MemoEmoji from "../../style/icons/MemoEmoji.png";
import {Dialog, Transition} from '@headlessui/react'
import {Fragment, useState} from 'react'
import Link from "next/link"

import {IoIosLink} from 'react-icons/io';
import {useTranslation} from "next-i18next";

export default function ImageInformation() {
    const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)
    const {t} = useTranslation('common')

    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            className="w-full"
        >
            <div className="container mx-auto px-4 xl:grid md:grid grid-cols-2 gap-8 justify-center items-start pt-16">
                <div className="w-full relative flex justify-center">
                    <Image
                        placeholder="blur"
                        alt="Marvin Image"
                        src={Image1}
                        className="rounded-2xl drop-shadow-2xl shadow"
                    />
                </div>
                <div className="flex flex-col justify-start">
                    <p className="text-white xl:text-5xl md:text-4xl text-2xl xl:pt-0 md:pt-0 pt-5">
                        {t('person.text.1')}{' '}
                        <span className="font-bold text-indigo-300">{getAge("2005-09-11")}</span>
                        <span className="font-bold text-indigo-300">{t('person.text.2')}</span>{' '}
                        {t('person.text.3')}{' '}
                        <span className="text-indigo-300 font-bold">{t('person.text.4')}</span>
                        {t('person.text.5')}
                        <span className="font-bold">{t('person.text.6')}</span> {t('person.text.7')}
                    </p>
                    <div className="pt-8 flex flex-col space-y-1">
                        <Link className={"hover:cursor-pointer"} href="/work">
                            <button
                                className="flex text-white bg-black items-center hover:bg-gray-900 font-medium rounded px-5 py-2.5 text-2xl">
                                <span className="xl:block md:block hidden">
                                    <IoIosLink className="inline pr-2 h-9 text-blue-500"/> {t('person.contact')}
                                </span>
                                <span className="xl:hidden md:hidden block">
                                    <IoIosLink className="inline mx-0 pr-2 h-9 text-blue-500"/> {t('contact')}
                                </span>
                            </button>
                        </Link>
                        <div className={"mt-1"}>
                            <a
                                href="mailto:kontakt@marvhuelsmann.com"
                                className="text-gray-300/90 text-xl hover:text-gray-200/90 xl:pr-12 md:pr-12 pr-0 font-medium"
                            >
                                {t('contact.mail.text.1')}{' '}
                                <img className="inline xl:h-8 md:h-8 h-8 pr-0.5 pb-1" src={EmailEmoji.src}
                                     alt="Email"/>{' '}
                                {t('contact.mail.text.2')}
                            </a>
                            <br className={"xl:hidden md:hidden block"}/>
                            <a
                                href="https://cal.com/marvin-hulsmann-rjtji3/30min"
                                target="_blank"
                                className="text-gray-300/90 text-xl hover:text-gray-200/90 font-medium"
                            >
                                {t('contact.meeting.text.1')}{' '}
                                <img className="inline xl:h-8 md:h-8 h-8 pr-0.5 pb-1" src={MemoEmoji.src}
                                     alt="Meeting"/>{' '}
                                {t('contact.meeting.text.2')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}