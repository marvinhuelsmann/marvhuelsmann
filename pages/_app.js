import '../style/global.css'

import {appWithTranslation} from 'next-i18next'
import {MotionConfig} from 'framer-motion'

const marvinhuelsmann = ({Component, pageProps}) => (
    <MotionConfig reducedMotion="user">
        <Component {...pageProps} />
    </MotionConfig>
)

export default appWithTranslation(marvinhuelsmann)
