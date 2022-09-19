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
                <p className={"text-gray-600 dark:text-gray-300 text-xl pb-4 mb-2 text-center items-center flex-col justify-center"}>
                    Falls du mir etwas Wichtiges mitteilen möchtest oder ein gutes und cooles <br/>
                    Projekt im Sinn hast, ist dies der perfekte Weg. <br/>
                </p>
            </div>
        </div>
    )
}
