import '/style/tailwind.css'
import {motion} from "framer-motion";

function marvinhuelsmann({Component, pageProps}) {
    return (
        <div>
                <Component {...pageProps} />
        </div>
    )
}

export default marvinhuelsmann
