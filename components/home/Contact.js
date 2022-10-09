import {motion} from "framer-motion";
import Image from "next/image";
import Image1 from "../../public/IMG_9815.jpeg";
import EmailEmoji from "../../style/icons/EmailEmoji.png";
import ImageModal from "./Images/ImageModal";
import {Dialog, Transition} from '@headlessui/react'
import {Fragment, useState} from 'react'

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
            className={"xl:pt-32 md:pt-44 mb-24 xl:grid md:grid grid-cols-2 justify-center items-start space-x-3.5"}>
            <div className={"w-full h-94 xl:pl-36 md:pl-10 pl-10 pr-10 -pb-8 relative justify-center"}>
                <Image placeholder="blur"
                       alt={"Marvin Image"}
                       src={Image1}
                       className={"rounded-2xl drop-shadow-2xl shadow"}/>
                <ImageModal className={"absolute"}/>
            </div>
            <div className={"pl-4"}>
                <h1 className={"font-bold xl:pt-0 md:pt-0 pt-10 text-gray-50 xl:text-8xl md:text-7xl text-5xl"}>
                    Das bin ich.
                </h1>
                {/*My age is a random number in the source code*/}
                <p className={"text-white xl:text-5xl md:text-5xl text-4xl"}>
                    Ich bin <span
                    className={"font-bold blur-md text-opacity-40 backdrop-blur hover:cursor-pointer"}
                    title={"This is a random Number!"}
                    onClick={openModal}>{Math.floor(Math.random() * 80) + 9}</span><span className={"font-bold text-indigo-300 hover:cursor-pointer"}
                                                       onClick={openModal}>Jahre</span> alt und komme aus Nordrhein
                    Westfalen, geboren in <a
                    href={"https://maps.apple.com/?address=Hamm,%20Deutschland&auid=3094865715305345970&ll=51.677569,7.821620&lsp=6489&q=Hamm&_ext=Ch8KBQgEEIEBCgQIBRADCgQIBhADCgQIChAGCgQIVRAHEiYp94+F6BDKSUAxqwZhbveyHkA5Dfs9sU7fSUBBpGyRtBv9H0BQDA%3D%3D"}
                    className={"text-indigo-300 font-bold hover:cursor-pointer"}>Hamm</a>.
                    Ich intressiere mich für Informatik und Technik. Einer meiner Schwerpunkte liegt bei der <span
                    className={"font-bold"}>Gestaltung und der Interaktion</span> von und mit Webseiten.
                </p>
                <div className={"pt-8"}>
                    <a href={"mailto:kontakt@marvhuelsmann.com"} className={"text-3xl"}>
                        <button type="button"
                                className="text-white bg-black items-center hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 text-2xl">
                            <img className={"inline xl:h-8 md:h-12 h-8 pr-2"} src={EmailEmoji.src}
                                 alt={"Email"}/> schreiben
                        </button>
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
                                <p className={"xl:text-5xl md:text-5xl text-4xl font-bold text-white pb-4 -mt-4"}>Wie lautet
                                    die Determinante dieser Matrix?</p>
                                <motion.div
                                    initial={{opacity: 0}}
                                    whileInView={{opacity: 1}}
                                    scale={3}
                                    viewport={{once: true}}>
                                <span className={"text-white text-6xl font-bold pb-10"}>
                                    (4,4,1)<br/>(2,5,3)<br/>(7,8,3)
                                </span>
                                </motion.div>
                                <br/>
                                <p className={"font-bold text-white text-3xl mt-4"}>
                                    11.09.200<span className={"font-light"}>?</span>
                                </p>
                                <p className={"text-white text-md font-medium -mt-1 leading-tight text-gray-100"}>
                                    Die Determinante gibt mein Geburtsjahr an und <br/>muss mit dem obigen Fragezeichen ersetzt werden.
                                </p>
                                <div className="mt-7">
                                    <button
                                        type="button"
                                        className="justify-center text-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={closeModal}
                                    >
                                        Hilfreich!
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
