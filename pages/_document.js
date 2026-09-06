import {Html, Head, Main, NextScript} from 'next/document'
import {LANG_TAG, DEFAULT_LOCALE} from '../lib/site'

export default function Document(props) {
    const locale = props.__NEXT_DATA__?.locale || props.locale || DEFAULT_LOCALE;
    const lang = LANG_TAG[locale] || "en";

    return (
        <Html lang={lang}>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet"/>
                <link href="https://fonts.cdnfonts.com/css/sf-pro-display" rel="stylesheet"/>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
                <link rel="apple-touch-icon" href="/Logo-Extra-Big-Red.png"/>
                <link rel="sitemap" type="application/xml" href="/sitemap.xml"/>
                <meta name="theme-color" content="#f5f5f7"/>
                <meta name="format-detection" content="telephone=no,email=no"/>
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}
