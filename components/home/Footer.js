import {useEffect, useState} from "react";
import Link from "next/link"
import MemoEmoji from "../../style/icons/MemoEmoji.png";

export default function Footer({darkLogo, oneSheetVisible}) {
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
            {(oneSheetVisible &&
                <div className={"justify-center mb-9 hover:cursor-pointer flex"}>
                    <Link href={"work"}>
                        <p className={"font-medium text-blue-400 hover:underline transition text-2xl"}>
                            Mit mir zusammen arbeiten?
                        </p>
                    </Link>
                </div>
            )}
            <div className={"xl:-mb-12 md:-mb-10 -mb-14 pb-10 justify-center"}>
                {(darkLogo &&
                    <img width={70} height={40} className={"mx-auto flex"} src={"../../LogoExtraBig.svg"}
                         alt={"MH Logo"}/>
                )}
                {(!darkLogo &&
                    <img width={70} height={40} className={"mx-auto flex"} src={"../../LogoExtraBigWhiteMode.svg"}
                         alt={"MH Logo"}/>
                )}
                <p className={"flex leading-tight justify-center text-center mx-auto text-gray-500"}>
                    Marvin Hülsmann © {new Date().getFullYear()}
                    <br/>
                    Nelkenstraße 17, 59073 Hamm, Deutschland
                    <br/>
                    mail@marvhuelsmann.com, +49 172 8244589
                    <br/>
                    USt - IdNr: DE 353408902
                    <br/>
                </p>
            </div>

            {/*( !ar &&
                <div className={"pb-10 -mb-8 -pt-2"}>
                    <a id={"ar-link"} rel={"ar"} href={"../../Starbase.usdz"}
                       className={"text-blue-500 dark:text-blue-400"}>
                        <img alt={"Hidden"} className={"hidden w-1"} src={""}/>
                        <span className={"text-xl flex justify-center text-center text-blue-500 hover:text-blue-400"}>
                                AR Flugplatz Erlebnis starten
                            </span>
                    </a>
                </div>
            )*/}
        </div>
    )
}
