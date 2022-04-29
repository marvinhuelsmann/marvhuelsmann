import '/style/tailwind.css'
import {motion} from "framer-motion";

function marvinhuelsmann({Component, pageProps}) {
    return (
        <motion.main
            animate={{
                scale: [1.1, 1],
            }}
            exit="exit" // Exit state (used later) to variants.exit
            transition={{type: 'linear'}} // Set the transition to linear
            className=""
        >
            <Component {...pageProps} />
        </motion.main>)
}

export default marvinhuelsmann
