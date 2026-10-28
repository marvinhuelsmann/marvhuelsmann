import '../style/global.css'

import {appWithTranslation} from 'next-i18next'
import {MotionConfig} from 'framer-motion'
import useSpotlight from '../lib/useSpotlight'

const marvinhuelsmann = ({Component, pageProps}) => {
    useSpotlight();
    return (
        <MotionConfig reducedMotion="user">
            <Component {...pageProps} />
        </MotionConfig>
    )
}

export default appWithTranslation(marvinhuelsmann)
