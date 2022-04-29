import {Fragment, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";

const {Configuration, OpenAIApi} = require("openai");

const configuration = new Configuration({
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);


export default function OpenAIView() {

    let [answer, setAnswer] = useState()
    let [isLoading, setLoading] = useState(false)

    const registerUser = async event => {
        if (event.target.question.value !== undefined &&
            event.target.question.value !== '') {
            event.preventDefault();
            setLoading(true)

            const value = await openai.createCompletion("text-davinci-002", {
                prompt: event.target.question.value,
                temperature: 0.3,
                max_tokens: 70,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            })

            for (let i = 0; i < value.data['choices'].length; i++) {
                if (value.data['choices'][i]["text"]) {
                    setAnswer(value.data['choices'][i]['text']);

                    setLoading(false)
                    openModal()
                }
            }
        }
    }

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }


    return (
        <>
            <div className={"contact-form mb-10"}>
                <div className={"items-center mt-4 flex flex-col justify-center"}>
                    {!isLoading &&
                        <form className={"w-full"} onSubmit={registerUser}>
                            <input placeholder={"Stelle Fragen an die KI."}
                                   className={"h-12 text-center bg-transparent text-white text-2xl focus:outline-none focus:outline-0 border-transparent rounded-md placeholder-gray-200"}
                                   name={"question"} id="question"/>
                                <button className={"ml-2 pl-2 pr-2 pt-2 pb-2 rounded bg-gray-300 text-gray-700"}
                                        type={"submit"}>
                                    Fragen!
                                </button>
                        </form>
                    }
                    {isLoading &&
                        <div className="animate-pulse flex space-x-4">
                            <div className="flex-1 space-y-6 py-1">
                                <div className="h-2 bg-slate-200 rounded"></div>
                                <div className="space-y-3">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                                        <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
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
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div
                                className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Die Antwort lautet:
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-md text-gray-500">
                                        {answer}
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={closeModal}
                                    >
                                        Verstanden, danke!
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
