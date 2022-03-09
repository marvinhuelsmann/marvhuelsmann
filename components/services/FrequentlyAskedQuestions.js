import {Disclosure} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/outline'

const faqs = [
    {
        question: "Was erhalte ich in der Premium Edition?",
        answer:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr," +
            " sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
    {
        question: "Wie lange erhalte ich die Premium Edition?",
        answer:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr," +
            " sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.", },
    {
        question: "Welche Zahlungsmethoden kann ich verwenden?",
        answer:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr," +
            " sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",    },
    {
        question: "Kann ich die Bestellung nach dem Kauf stornieren?",
        answer:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr," +
            " sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",  }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function FrequentlyAskedQuestions() {
    return (
        <div className="bg-gray-50 dark:bg-black">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                    <h2 className="text-center text-6xl font-bold text-gray-900 dark:text-gray-300 sm:text-4xl">Die
                        Antworten für die häufigst gestellten Fragen an einem Ort.</h2>
                    <dl className="text-5xl mt-6 space-y-6 divide-y divide-gray-200">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({open}) => (
                                    <>
                                        <dt className="xl:text-2xl text-lg">
                                            <Disclosure.Button
                                                className="text-left w-full flex justify-between items-start text-gray-400">
                                                <span
                                                    className="font-medium text-gray-900 dark:text-gray-200">{faq.question}</span>
                                                <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                              className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                              aria-hidden="true"
                          />
                        </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <p className="text-xl text-gray-500 dark:text-gray-400">{faq.answer}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
