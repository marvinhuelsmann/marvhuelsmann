import {useEffect, useState} from "react";
import Link from "next/link"
import MemoEmoji from "../style/icons/MemoEmoji.png";
import {AiOutlineSearch} from 'react-icons/ai';

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
            {(!oneSheetVisible &&
                <Link href={"work"}>
                    <div>
                        <div className={"flex xl:pb-2 md:pl-2 pb-0.5 mx-auto justify-center"}>
                            <AiOutlineSearch className={"text-6xl text-blue-400 hover:text-blue-300 transition"}/>
                        </div>
                        <div className={"justify-center mb-9 hover:cursor-pointer flex"}>
                            <p className={"font-medium text-blue-400 hover:underline transition text-2xl"}>
                                Mit mir zusammen arbeiten?
                            </p>
                        </div>
                    </div>
                </Link>
            )}
            {(oneSheetVisible &&
                <div className={"flex -mt-3 pb-5 justify-center"}>
                    <a target={"_blank"}
                       href={"https://www.trnsp.ml/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftransportier.appspot.com%2Fo%2Fuploads%252F1670450044175.png%3Falt%3Dmedia%26token%3Ded13b195-6780-4731-a922-a8b494ca062c&w=1920&q=75"}
                       className={"text-3xl"}>
                        <button type="button"
                                className="text-white bg-black items-center hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded px-4 py-3 mr-1 mb-1 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600 dark:border-gray-600 text-2xl">
                            <img className={"inline xl:h-8 md:h-7 h-6 pr-1"} src={MemoEmoji.src}
                                 alt={"Memo"}/> One Sheet
                        </button>
                    </a>
                </div>
            )}
            <div className={"xl:-mb-12 md:-mb-10 -mb-14 pb-10 justify-center"}>
                {(darkLogo &&
                    <a href={"/"}>
                        <img width={70} height={40} className={"mx-auto flex"} src={"../../LogoExtraBig.svg"}
                             alt={"MH Logo"}/>
                    </a>
                )}
                {(!darkLogo &&
                    <a href={"/"}>
                        <img width={70} height={40} className={"mx-auto flex"} src={"../../LogoExtraBigWhiteMode.svg"}
                             alt={"MH Logo"}/>
                    </a>
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
