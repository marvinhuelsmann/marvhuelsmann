import {Dialog, Transition} from '@headlessui/react'
import {Fragment, useState} from 'react'
import {motion} from "framer-motion";
import Image from 'next/image'
import Image1 from "../../../public/IMG_9815.jpeg";
import Image2 from "../../../public/IMG_0242.jpeg";

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
                animate={{
                    scale: 0.9
                }}
                transition={{
                    type: "spring",
                    stiffness: 10,
                    damping: 20
                }}
                className={"text-center"}>
                    <div>
                            <div onClick={openModal} className={"xl:pt-0 pt-2"}>
                                <p className={"text-2xl text-gray-300 hover:cursor-pointer"}>Weitere Bilder ansehen</p>
                            </div>
                    </div>
            </motion.div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto transition transform bg-gradient-to-t from-blue-400 to-blue-500"
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
                                className=" grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 space-x-1 space-y-2  p-6  text-left align-middle transition-all transform rounded-2xl">
                                <Image placeholder="blur" src={Image1}/>
                                <Image placeholder="blur" className={"w-full h-full"} src={Image2}/>

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={closeModal}
                                    >
                                        Schließen
                                    </button>
                                        <p className={"text-sm flex mx-auto text-gray-200"}>Weitere Bilder werden bald hinzugefügt.</p>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
