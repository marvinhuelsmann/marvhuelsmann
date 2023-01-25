import {Dialog, Transition} from '@headlessui/react'
import {Fragment, useState} from 'react'
import {motion} from "framer-motion";
import Image from 'next/image'
import Image1 from "../../../public/IMG_9815.jpeg";
import Image2 from "../../../public/IMG_0242.jpeg";
import MapWidgetImage from "../../../public/MapsWidgetIcon.svg";
import {AiOutlineTwitter, AiFillLinkedin, AiOutlineInstagram} from 'react-icons/ai';

export default function ImageModal() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                animate={{
                    scale: 1,
                    y: -4
                }}
                transition={{
                    type: "ease",
                    stiffness: 7,
                    damping: 10,
                    delay: 0.2
                }}
                className={"text-center"}>
                <div>
                    <div onClick={openModal} className={"xl:pt-0 -pt-1"}>
                        <p className={"text-2xl text-orange-200/90 hover:cursor-pointer"}>Weiteres entdecken</p>
                    </div>
                </div>
            </motion.div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto transition transform bg-gradient-to-t from-orange-400 to-yellow-500"
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
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
              &#8203;
            </span>

                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div
                                className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-center align-middle transition-all transform  rounded-2xl">
                                <p className={"xl:text-5xl md:text-5xl text-4xl font-bold text-white pb-4 -mt-4"}>Meine
                                    Sozialen Netzwerke</p>
                                <motion.div
                                    initial={{opacity: 0}}
                                    whileInView={{opacity: 1}}
                                    scale={3}
                                    viewport={{once: true}}>
                                    <div className={"grid grid-cols-3 col-span-1 justify-center pl-2"}>
                                        <a target={"_blank"} href={"https://twitter.com/marvhuelsmann?s=20"}><AiOutlineTwitter
                                            className={"flex mx-0 text-blue-400 hover:text-blue-500 transition transform w-32 h-32"}/></a>
                                        <a target={"_blank"} href={"https://www.linkedin.com/in/marvin-hülsmann-9892201b5/"}><AiFillLinkedin
                                            className={"flex mx-0 text-blue-700 hover:text-blue-800 transition transform w-32 h-32"}/></a>
                                        <a target={"_blank"} href={"https://www.instagram.com/marvhuelsmann"}><AiOutlineInstagram
                                            className={"flex mx-0 text-pink-600 hover:text-pink-700 transition transform w-32 h-32"}/></a>
                                    </div>
                                </motion.div>
                                <br/>
                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="justify-center text-center px-4 py-2 text-sm font-medium text-orange-900 bg-yellow-100 border border-transparent rounded-md hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-200"
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
        </>
    )
}
