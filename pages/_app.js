import '/style/tailwind.css'

import { appWithTranslation } from 'next-i18next'

const marvinhuelsmann = ({ Component, pageProps }) => (
    <Component {...pageProps} />
)

export default appWithTranslation(marvinhuelsmann)

