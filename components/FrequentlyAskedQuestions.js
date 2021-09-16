import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
    {
        question: "Was ist dein Lieblingsessen?",
        answer:
            "Mein Lieblingsessen ist eindeutig eine Pizza Salami!",
    },
    {
        question: "Wann wurde diese Website entwickelt?",
        answer:
            "Ich habe mit der Entwicklung der neuen Website Anfang September 2021 angefangen.",
    },
    {
        question: "Wie wurde diese Website entwickelt?",
        answer:
            "Die Website wurde mit den Frameworks: Next.js und TailwindCSS entwickelt.",
    },
    {
        question: "Was ist dein Lieblingsunternehmen?",
        answer:
            "Die Firma mit dem angebissenen Apfel gefällt mir sehr gut...",
    },
    {
        question: "Woher kommst du?",
        answer: "Ich komme aus Deutschland, um genauer zu sein, aus Nordrhein-Westfalen in der Nähe von Münster."
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function FrequentlyAskedQuestions() {
    return (
        <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                    <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Die antworten für die häufigst gestellten Fragen an einem Ort.</h2>
                    <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt className="text-lg">
                                            <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                                                <span className="font-medium text-gray-900">{faq.question}</span>
                                                <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                              className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                              aria-hidden="true"
                          />
                        </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <p className="text-base text-gray-500">{faq.answer}</p>
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