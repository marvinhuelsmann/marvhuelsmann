import {Dialog, Transition} from '@headlessui/react'
import {Fragment, useState} from 'react'
import {motion} from "framer-motion";
import Image from 'next/image'
import Image1 from "../../../public/SFMarvin.jpeg";
import Image2 from "../../../public/IMG_0242.jpeg";
import {useTranslation} from "next-i18next";

export default function ImageModal() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const { t } = useTranslation('common')


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
                                <p className={"text-2xl text-gray-300 hover:cursor-pointer"}>{t('images.more')}</p>
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
                                className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 p-6 text-left align-middle transition-all transform rounded-2xl w-full">
                                <Image placeholder="blur" src={Image1}/>
                                <Image placeholder="blur" src={Image2}/>

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={closeModal}
                                    >
                                        {t('back')}
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
