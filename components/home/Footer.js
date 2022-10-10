import {useEffect, useState} from "react";

export default function Footer() {
    const [ar, setAR] = useState('ar')

    useEffect(() => {
        const a = document.createElement("a");
        if (a.relList.supports("ar")) {
            setAR(true)
        } else {
            setAR(false)
        }
    })

    return (
        <div className={""}>
            {(ar &&
                <div className={"pb-4 -pt-2"}>
                    <a id={"ar-link"} rel={"ar"} href={"../../Starbase.usdz"}
                       className={"text-blue-500 dark:text-blue-400"}>
                        <img alt={"Hidden"} className={"hidden w-1"} src={""}/>
                        <span className={"text-xl flex justify-center text-center text-blue-500 hover:text-blue-400"}>
                                AR Flugplatz Erlebniss starten
                            </span>
                    </a>
                </div>
            )}
            <div className={"xl:-mb-12 md:-mb-10 -mb-7 pb-12 justify-center"}>
                <img width={70} height={40} className={"mx-auto flex"} src={"../../LogoExtraBigWhiteMode.svg"}
                     alt={"MH Logo"}/>
                <p className={"flex leading-tight justify-center text-center mx-auto text-gray-500"}>
                    Marvin Hülsmann © {new Date().getFullYear()}
                    <br/>
                    Nelkenstraße 17, 59073 Hamm, Deutschland
                    <br/>
                    Kontakt: mail@marvhuelsmann.com
                </p>
            </div>
        </div>
    )
}
