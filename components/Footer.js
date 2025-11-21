import {useEffect, useState} from "react";
import Link from "next/link"
import MemoEmoji from "../style/icons/MemoEmoji.png";
import {AiOutlineSearch} from 'react-icons/ai';
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";

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

    const onToggleLanguageClick = (newLocale) => {
        const { pathname, asPath, query } = router
        router.push({pathname, query}, asPath, {locale: newLocale}).then(r => console.log(r))
     }

    const router = useRouter()
    const changeTo = router.locale === 'us' ? 'de' : router.locale === 'de' ? 'sp' : router.locale === 'sp' ? 'fr' : 'us'
    const { t } = useTranslation('common')

    return (
        <div className={"w-full"}>
            <div className={"xl:-mb-12 md:-mb-10 -mb-14 pb-10 justify-center"}>
                <div className={"flex leading-tight justify-center text-center mx-auto text-gray-500 p-5"}>
                    <Link href="/" locale={changeTo}>
                        {t('language')}{' '}<button className={"text-blue-500 font-bold"}>{t('change-locale', { changeTo })}</button>
                    </Link>
                </div>


                <p className={"flex leading-tight justify-center text-center mx-auto text-gray-500"}>
                    Marvin Hülsmann © {new Date().getFullYear()}
                    <br/>
                    Nelkenstraße 17, 59073 Hamm, Germany
                    <br/>
                    mail@marvhuelsmann.com, +49 172 1109101
                    <br/>
                    {t('vatid')}: DE 353408902
                    <br/>
                </p>

                {(darkLogo &&
                    <Link href={"/"}>
                        <img width={70} height={40} className={"mx-auto flex"} src={"../../LogoExtraBig.svg"}
                             alt={"MH Logo"}/>
                    </Link>
                )}
                {(!darkLogo &&
                    <Link href={"/"}>
                        <img width={70} height={40} className={"mx-auto flex"} src={"../../LogoExtraBigWhiteMode.svg"}
                             alt={"MH Logo"}/>
                    </Link>
                )}
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
