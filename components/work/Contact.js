import EmailEmoji from "../../style/icons/EmailEmoji.png";
import {useState} from "react";
import {useTranslation} from "next-i18next";

export default function Contact() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState(false)

    const openMailClient = (e) => {
        e.preventDefault()
        console.log('Open Client')

        let data = {
            firstName,
            lastName,
            email,
            message
        }

        if (firstName !== '' || email !== '' || message !== '') {
            window.location.href = "mailto:kontakt@marvhuelsmann.com?subject=Anfrage von " + data.firstName + " " + data.lastName + " - " + data.email + "&body=" + data.message;
        } else {
            setError(true)
        }
    }

    const { t } = useTranslation('contact')

    return (
        <div className="mt-2 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="mt-3 md:col-span-3 md:mt-0">
                    <form method="POST">
                        <div className="overflow-hidden shadow sm:rounded-xl">
                            <div className="bg-orange-400/60 drop-shadow px-4 py-5 sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium text-white">
                                            {t('firstname')}
                                        </label>
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            onChange={(e)=>{setFirstName(e.target.value)}}
                                            placeholder={"Max"}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 text-xl"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="last-name" className="block text-sm font-medium text-white">
                                            {t('lastname')}
                                        </label>
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            onChange={(e)=>{setLastName(e.target.value)}}
                                            placeholder={"Mustermann"}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 text-xl"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-4">
                                        <label htmlFor="email-address"
                                               className="block text-sm font-medium text-white">
                                            {t('mail')}
                                        </label>
                                        <input
                                            type="text"
                                            name="email-address"
                                            id="email-address"
                                            autoComplete="email"
                                            onChange={(e)=>{setEmail(e.target.value)}}
                                            placeholder={"muster@mail.com"}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 text-xl"
                                        />
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="message"
                                               className="block text-sm font-medium text-white">
                                            {t('message')}
                                        </label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            autoComplete="message"
                                            onChange={(e)=>{setMessage(e.target.value)}}
                                            placeholder={"Hi Marvin..."}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 text-xl"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-orange-300/50 px-4 py-3 text-right sm:px-6">
                                <button type="submit"
                                        onClick={(e)=>{openMailClient(e)}}
                                        className="text-white bg-black items-center hover:bg-yellow-900 focus:outline-none focus:ring-2 focus:ring-orange-300 font-medium rounded px-5 py-2 mr-1 mb-1 dark:bg-orange-800 dark:hover:bg-orange-700 dark:focus:ring-orange-700 dark:border-yellow-700 xl:text-2xl md:text-2xl text-xl">
                                    <img className={"inline xl:h-8 md:h-12 h-6 pr-2"} src={EmailEmoji.src}
                                         alt={"Email"}/> {t('write')}
                                </button>
                            </div>
                        </div>
                        {(error &&
                            <p className={"text-left text-2xl text-gray-200 pt-1"}>{t('error.text.1')} <span className={"font-bold text-red-200"}>{t('error.text.2')}</span> {t('error.text.3')}</p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}