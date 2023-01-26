import {motion} from "framer-motion";
import Image from "next/image";
import Image1 from "../../public/Marvin_Mountain_Orange.png";
import MapWidgetImage from "../../public/MapsWidgetIcon.svg";
import ImageModal from "./Image/ImageModal";
import Contact from "./Contact"
import {Dialog, Transition} from '@headlessui/react'
import {Fragment, useState} from 'react'
import { BiLinkAlt } from 'react-icons/bi';


export default function ImageInformation() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            className={"xl:pt-24 md:pt-24 mb-24 xl:grid md:grid grid-cols-2 justify-center items-start space-x-3.5"}>
            <div className={"w-full h-94 xl:pl-36 md:pl-10 pl-10 pr-10 -pb-8 relative justify-center"}>
                <Image placeholder="blur"
                       alt={"Marvin Image"}
                       src={Image1}
                       className={"rounded-2xl drop-shadow-2xl shadow "}/>
                <ImageModal className={"absolute"}/>
            </div>
            <div className={"pl-4 xl:pr-16 md:pr-4 pr-4"}>
                <h1 className={"font-bold xl:pt-0 md:pt-0 pt-10 text-gray-50 xl:text-8xl md:text-7xl text-5xl"}>
                    Kontakt
                </h1>
                <Contact/>
                {/*My age is a random number in the source code*/}
                <div className={"pt-8"}>
                    <p onClick={openModal} className={"text-3xl hover:cursor-pointer text-white"}>
                        Wenn du ein <span className={"font-bold"}>cooles Projekt</span> im Sinn hast, Beratung benötigst oder Fragen hast, nutze das
                        Formular oben und wende dich unverbindlich an mich. <span className={"text-yellow-200 font-bold"}>Weitere Informationen <BiLinkAlt className={"inline pb-1 font-bold"}/></span></p>
                </div>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto transition transform bg-gradient-to-t from-green-900 to-indigo-200/90"
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
                                <p className={"xl:text-5xl md:text-5xl text-4xl font-bold text-white pb-4 -mt-4"}>Persönlich kennenlernen?</p>
                                <motion.div
                                    initial={{opacity: 0}}
                                    whileInView={{opacity: 1}}
                                    scale={3}
                                    className={"flex"}
                                    viewport={{once: true}}>
                                <a tabIndex="-1" target={"_blank"} href={"https://maps.apple.com/?address=Hamm,%20Nordrhein-Westfalen,%20Deutschland&auid=3094865715305345970&ll=51.680431,7.817423&lsp=7618&q=Hamm"} className={"pb-1 xl:pl-8 md:pl-6 pl-0"}>
                                    <img className={"rounded-3xl"} src={MapWidgetImage.src} alt={"Maps"}/>
                                </a>
                                </motion.div>
                                <br/>
                                <p className={"font-bold text-white text-3xl mt-4"}>
                                    Direkt <a target={"_blank"} href={"tel:+49 172 8244589"}>Anrufen</a>?
                                </p>
                                <p className={"pt-2 text-white text-md font-medium -mt-1 leading-tight text-gray-100"}>
                                    Ich bin bereit Ideen persönlich<br/> zu besprechen und umzusetzen.
                                </p>
                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="justify-center text-center px-4 py-2 text-sm font-medium text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-200"
                                        onClick={closeModal}
                                    >
                                        Zurück zur Seite
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </motion.div>
    )
}
