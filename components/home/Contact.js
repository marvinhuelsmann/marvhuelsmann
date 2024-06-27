import {motion} from "framer-motion";
import Image from "next/image";
import Image1 from "../../public/StandUpMarvin.jpeg";
import EmailEmoji from "../../style/icons/EmailEmoji.png";
import MemoEmoji from "../../style/icons/MemoEmoji.png";
import ImageModal from "./Images/ImageModal";
import {Dialog, Transition} from '@headlessui/react'
import {Fragment, useState} from 'react'
import Link from "next/link"

import { IoIosLink } from 'react-icons/io';
import {useTranslation} from "next-i18next";

export default function ImageInformation() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

    const { t } = useTranslation('common')

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
                       className={"rounded-2xl drop-shadow-2xl shadow"}/>
                <ImageModal className={"absolute"}/>
            </div>
            <div className={"pl-4"}>
                <h1 className={"font-bold -pl-4 xl:pt-0 md:pt-0 pt-10 text-gray-50 xl:text-8xl md:text-7xl text-5xl"}>{t('person')}
                </h1>
                {/*My age is a random number in the source code*/}
                <p className={"text-white xl:text-5xl md:text-5xl text-4xl"}>
                    {t('person.text.1')} <span
                    className={"font-bold text-indigo-300 backdrop-blur hover:cursor-pointer"}
                    title={"This is a random Number!"}
                    onClick={openModal}>{getAge("2005-09-11")}</span><span className={"font-bold text-indigo-300 hover:cursor-pointer"}
                                                       onClick={openModal}>{' '} {t('person.text.2')}</span> {t('person.text.3')} <a
                    href={"https://maps.apple.com/?address=Hamm,%20Deutschland&auid=3094865715305345970&ll=51.677569,7.821620&lsp=6489&q=Hamm&_ext=Ch8KBQgEEIEBCgQIBRADCgQIBhADCgQIChAGCgQIVRAHEiYp94+F6BDKSUAxqwZhbveyHkA5Dfs9sU7fSUBBpGyRtBv9H0BQDA%3D%3D"}
                    className={"text-indigo-300 font-bold hover:cursor-pointer"}>{t('person.text.4')}</a>{t('person.text.5')} <span
                    className={"font-bold"}>{t('person.text.6')}</span> {t('person.text.7')}
                </p>
                <div className={"pt-8"}>
                    <Link href={"work"} className={"text-3xl"}>
                        <button type="button"
                                className="flex text-white bg-black items-center hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 text-2xl">
                            <span className={"xl:block md:block hidden"}><IoIosLink className={"inline pr-2 h-9 text-blue-500"}/>{t('person.contact')}</span>
                            <span className={"xl:hidden md:hidden block"}><IoIosLink className={"inline mx-0 pr-2 h-9 text-blue-500"}/>{t('contact')}</span>
                        </button>
                    </Link>
                    <a href={"mailto:kontakt@marvhuelsmann.com"} className={"text-gray-300/90 text-xl hover:text-gray-200/90 hover:cursor-pointer font-medium -pt-3"}>
                        {t('contact.mail.text.1')} <img className={"inline xl:h-8 md:h-8 h-8 pr-0.5 pb-1"} src={EmailEmoji.src}
                                       alt={"Email"}/> {t('contact.mail.text.2')}
                    </a>
                    <br/>

                    <a href={"https://cal.com/marvin-hulsmann-rjtji3/30min"} target={"_blank"} className={"text-gray-300/90 text-xl hover:text-gray-200/90 hover:cursor-pointer font-medium -pt-3"}>
                        {t('contact.meeting.text.1')} <img className={"inline xl:h-8 md:h-8 h-8 pr-0.5 pb-1"} src={MemoEmoji.src}
                                              alt={"Email"}/> {t('contact.meeting.text.2')}
                    </a>
                </div>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto transition transform bg-gradient-to-t from-indigo-100 to-indigo-500"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0"/>
                        </Transition.Child>
                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
              &#8203;
            </span>

                        <Transition.Child
                            as={Fragment}
                            onClick={closeModal}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div
                                className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-center align-middle transition-all transform  rounded-2xl">

                                <motion.div
                                    initial={{opacity: 0}}
                                    whileInView={{opacity: 1}}
                                    scale={3}
                                    viewport={{once: true}}>
                                <span className={"text-white text-6xl font-bold"}>
                                    11.09.2005
                                </span>
                                </motion.div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </motion.div>
    )
}
