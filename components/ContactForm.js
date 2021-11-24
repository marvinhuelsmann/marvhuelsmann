export default function ContactForm() {
    return (
        <div className={"contact-form mb-10"}>
            <div className={"items-center mb-3 flex flex-col justify-center"}>
                <img className={"relative w-16"} src={"https://emojis.wiki/emoji-pics/apple/pensive-face-apple.png"} alt={"Mad Smiley"}/>
            </div>
            <p className={"text-gray-400 dark:text-gray-300 text-md pb-4 mb-2 text-center items-center flex-col justify-center text-2xl"}>
                Bis jetzt kannst du mich noch nicht über ein Kontaktformular erreichen,<br/>
                schreibe mir bis dahin eine E-Mail an <a className={"text-blue-400 hover:text-blue-500"}
                                                         href={"mailto:kontakt@marvhuelsmann.com"}>kontakt@marvhuelsmann.com</a>!
            </p>
            <div className={"right"}>
                <h1 className="text-black dark:text-white text-center mt-10 font-bold xl:text-5xl md:text-4xl text-2xl">
                    Nachricht
                </h1>
                <p className={"text-gray-600 dark:text-gray-300 text-xl pb-4 mb-2 text-center items-center flex-col justify-center"}>
                    Falls du mir etwas wichtiges mitteilen möchtest oder ein gutes und cooles<br/> Projekt im Sinn hast
                    ist dies der perfekte Weg.
                </p>
            </div>
        </div>
    )
}