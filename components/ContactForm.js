export default function ContactForm() {
    return (
        <div className={"contact-form mb-10"}>
            <div className={"items-center mb-3 flex flex-col justify-center"}>
                <a className={"text-blue-400 hover:text-blue-500"}
                   href={"mailto:kontakt@marvhuelsmann.com"}>
                    <img className={"relative w-20"} src={"https://cdn-0.emojis.wiki/emoji-pics-lf/apple/love-letter-apple.png"}
                         alt={"Mad Smiley"}/>
                </a>
            </div>
            <div className={"right"}>
                <h1 className="text-black dark:text-white text-center mt-10 font-bold xl:text-5xl md:text-4xl text-2xl">
                    Nachricht
                </h1>
                <p className={"text-gray-600 dark:text-gray-300 text-xl pb-4 mb-2 text-center items-center flex-col justify-center"}>
                    Falls du mir etwas Wichtiges mitteilen möchtest oder ein gutes und cooles <br/>
                    Projekt im Sinn hast, ist dies der perfekte Weg. <br/>
                    <span className={"text-gray-700 hover:text-gray-400 hover:transition"}>(Klicke auf dem Brief um die Nachricht zu senden)</span>
                </p>
            </div>
        </div>
    )
}
