import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet"/>
                <link href="https://fonts.cdnfonts.com/css/sf-pro-display" rel="stylesheet"/>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
                <meta name="theme-color" content="#f5f5f7"/>
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}
