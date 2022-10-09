export default function Footer() {
    return (
        <div className={"mt-10"}>
            <div className={"xl:-mb-12 md:-mb-10 -mb-7 justify-center"}>
                <img width={50} height={40} className={"mx-auto flex"} src={"../../LogoExtraBigWhiteMode.svg"} alt={"MH Logo"}/>
                <p className={"flex justify-center text-center mx-auto text-gray-500"}>
                    Marvin Hülsmann © {new Date().getFullYear()}
                </p>
            </div>
        </div>
    )
}
