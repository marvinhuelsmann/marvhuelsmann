import '/style/tailwind.css'
import {motion} from "framer-motion";

function marvinhuelsmann({Component, pageProps}) {
    return (
        <div>
            <motion.main
                animate={{
                    scale: [1.1, 1],
                }}
                exit="exit" // Exit state (used later) to variants.exit
                transition={{type: 'linear'}} // Set the transition to linear
                className="xl:block md:block hidden"
            >
                <Component {...pageProps} />
            </motion.main>
            <div className="xl:hidden md:hidden block">
                <Component {...pageProps} />
            </div>
        </div>
    )
}

export default marvinhuelsmann
