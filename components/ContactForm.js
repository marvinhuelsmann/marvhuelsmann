export default function ContactForm() {
    return (
        <div className={"contact-form mb-10"}>
            <div className={"md:flex xl:flex justify-center items-center text-center items-col"}>
                <div className={"contact flex flex-row mr-4"}>
                    <div id={"name"} className={"mr-5 ml-5"}>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <div className="mt-1 fixed relative rounded-md shadow-sm">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 sm:text-sm border-gray-300 rounded-md"
                                placeholder="Marvin Hülsmann"
                            />
                        </div>
                    </div>
                    <div id={"email"} className={"relative"}>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Adresse
                        </label>
                        <div className="mt-1 fixed relative rounded-md shadow-sm">
                            <input
                                type="email"
                                name="Email"
                                id="email"
                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 sm:text-sm border-gray-300 rounded-md"
                                placeholder="deine@email.de"
                            />
                        </div>
                    </div>
                </div>
                <br/>
                <div id={"text"}>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Deine Nachricht
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                    <textarea
                        name="message"
                        id="message"
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 pl-2 pr-24 sm:text-sm border-gray-300 rounded-md"
                        placeholder="Hey, Marvin Hülsmann..."
                    />
                    </div>
                </div>
                <div id={"submit"} className={"mt-4"}>
                    <div className="sm:flex sm:justify-center lg:justify-start">
                        <div className="sm:mt-0 sm:ml-3">
                            <a
                                href="#"
                                className="w-full flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:text-lg md:px-5"
                            >
                                Absenden
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <p className={"text-gray-400 text-md pb-4 mb-2 text-center items-center flex-col justify-center"}>
                Bis jetzt kannst du mich über dieses Kontaktformular noch nicht erreichen!
            </p>
            <div className={"right"}>
                <h1 className="text-black text-center mt-10 font-bold xl:text-5xl md:text-4xl text-2xl">
                    Nachricht
                </h1>
                <p className={"text-gray-600 text-xl pb-4 mb-2 text-center items-center flex-col justify-center"}>
                    Falls du mir etwas wichtiges mitteilen möchtest oder ein gutes und cooles<br/> Projekt im Sinn hast ist dies der perfekte Weg.
                </p>
            </div>
        </div>
    )
}