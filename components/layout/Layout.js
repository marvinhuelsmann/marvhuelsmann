import Head from "next/head";
import {useRouter} from "next/router";
import Nav from "./Nav";
import Footer from "../Footer";
import {SITE_NAME, LOCALES, LANG_TAG, OG_LOCALE, OG_IMAGE, cleanPath, localizedUrl, DEFAULT_LOCALE} from "../../lib/site";

/**
 * Page shell plus the whole SEO head: canonical, hreflang for every locale,
 * Open Graph / Twitter cards, robots directives and optional JSON-LD.
 *
 * `xDefault` picks which locale answers for visitors without a language match.
 * Pages aimed at the German market pass "de".
 */
export default function Layout({
    title,
    description,
    image = OG_IMAGE,
    jsonLd,
    noindex = false,
    xDefault = DEFAULT_LOCALE,
    type = "website",
    children,
}) {
    const router = useRouter();
    const locale = router.locale || DEFAULT_LOCALE;
    const path = cleanPath(router.asPath);
    const canonical = localizedUrl(path, locale);
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

    return (
        <>
            <Head>
                <title>{fullTitle}</title>
                <meta name="description" content={description}/>
                <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
                <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"}/>
                <meta name="author" content={SITE_NAME}/>
                <meta name="geo.region" content="DE-BE"/>
                <meta name="geo.placename" content="Berlin"/>

                <link rel="canonical" href={canonical}/>
                {LOCALES.map((l) => (
                    <link key={`hreflang-${l}`} rel="alternate" hrefLang={LANG_TAG[l]} href={localizedUrl(path, l)}/>
                ))}
                <link rel="alternate" hrefLang="x-default" href={localizedUrl(path, xDefault)}/>

                <meta property="og:site_name" content={SITE_NAME}/>
                <meta property="og:type" content={type}/>
                <meta property="og:url" content={canonical}/>
                <meta property="og:title" content={fullTitle}/>
                <meta property="og:description" content={description}/>
                <meta property="og:locale" content={OG_LOCALE[locale]}/>
                {LOCALES.filter((l) => l !== locale).map((l) => (
                    <meta key={`og-alt-${l}`} property="og:locale:alternate" content={OG_LOCALE[l]}/>
                ))}
                <meta property="og:image" content={image.url}/>
                <meta property="og:image:secure_url" content={image.url}/>
                <meta property="og:image:width" content={String(image.width)}/>
                <meta property="og:image:height" content={String(image.height)}/>
                <meta property="og:image:alt" content={image.alt}/>

                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@marvhuelsmann"/>
                <meta name="twitter:creator" content="@marvhuelsmann"/>
                <meta name="twitter:title" content={fullTitle}/>
                <meta name="twitter:description" content={description}/>
                <meta name="twitter:image" content={image.url}/>
                <meta name="twitter:image:alt" content={image.alt}/>

                {jsonLd && (
                    <script
                        type="application/ld+json"
                        // JSON-LD is generated from our own constants, never from user input.
                        dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd).replace(/</g, "\\u003c")}}
                    />
                )}
            </Head>
            <Nav/>
            <main className="relative">{children}</main>
            <Footer/>
        </>
    )
}
