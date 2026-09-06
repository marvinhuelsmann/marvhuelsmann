/**
 * Site-wide constants shared by the SEO layer, sitemap and structured data.
 */
export const SITE_URL = "https://marvhuelsmann.com";
export const SITE_NAME = "Marvin Hülsmann";
export const DEFAULT_LOCALE = "us";
export const LOCALES = ["de", "us", "fr", "sp"];

/** Internal locale code → BCP 47 language tag used for <html lang> and hreflang. */
export const LANG_TAG = {de: "de", us: "en", fr: "fr", sp: "es"};

/** Internal locale code → Open Graph locale. */
export const OG_LOCALE = {de: "de_DE", us: "en_US", fr: "fr_FR", sp: "es_ES"};

export const OG_IMAGE = {
    url: `${SITE_URL}/og-image.jpg`,
    width: 1200,
    height: 630,
    alt: "Marvin Hülsmann im Apple Park",
};

export const SAME_AS = [
    "https://github.com/marvinhuelsmann",
    "https://www.linkedin.com/in/marvin-hülsmann-9892201b5/",
    "https://www.instagram.com/marvhuelsmann",
    "https://twitter.com/marvhuelsmann",
    "https://mhcreations.de",
];

/** Strip hash and query so canonical URLs stay stable. */
export function cleanPath(asPath = "/") {
    const path = asPath.split("#")[0].split("?")[0];
    return path === "" ? "/" : path.replace(/\/+$/, "") || "/";
}

/** Absolute URL for a path in a given locale, respecting the default-locale prefix rule. */
export function localizedUrl(path, locale) {
    const clean = cleanPath(path);
    const prefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;
    const suffix = clean === "/" ? "" : clean;
    return `${SITE_URL}${prefix}${suffix}` || SITE_URL;
}
