export default function Footer() {
    return (
        <div className={""}>
            <div className={"xl:-mb-12 md:-mb-10 -mb-7 pb-12 justify-center"}>
                <img width={70} height={40} className={"mx-auto flex"} src={"../../LogoExtraBigWhiteMode.svg"} alt={"MH Logo"}/>
                <p className={"flex leading-tight justify-center text-center mx-auto text-gray-500"}>
                    Marvin Hülsmann © {new Date().getFullYear()}
                    <br/>
                    Nelkenstraße 17, 59073 Hamm, Deutschland
                    <br/>
                    Contact: kontakt@marvhuelsmann.com
                </p>
            </div>
        </div>
    )
}
