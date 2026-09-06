import {CITIES} from "../lib/cities";
import {LOCALES, LANG_TAG, localizedUrl} from "../lib/site";

/**
 * Every page in every locale, each carrying its hreflang cluster so Google can
 * pair the language versions without crawling all of them first.
 */
const ROUTES = [
    {path: "/", priority: "1.0", changefreq: "weekly"},
    {path: "/work", priority: "0.9", changefreq: "monthly"},
    {path: "/webdesign", priority: "0.9", changefreq: "weekly"},
    ...CITIES.map((c) => ({path: `/webdesign/${c.slug}`, priority: "0.8", changefreq: "monthly"})),
];

const escape = (s) => s.replace(/&/g, "&amp;");

function urlEntry(route, locale, lastmod) {
    const alternates = LOCALES.map((l) =>
        `<xhtml:link rel="alternate" hreflang="${LANG_TAG[l]}" href="${escape(localizedUrl(route.path, l))}"/>`
    ).join("");
    const xDefault = route.path.startsWith("/webdesign") ? "de" : "us";
    return `<url><loc>${escape(localizedUrl(route.path, locale))}</loc>` +
        `<lastmod>${lastmod}</lastmod><changefreq>${route.changefreq}</changefreq><priority>${route.priority}</priority>` +
        alternates +
        `<xhtml:link rel="alternate" hreflang="x-default" href="${escape(localizedUrl(route.path, xDefault))}"/>` +
        `</url>`;
}

export async function getServerSideProps({res}) {
    const lastmod = new Date().toISOString().slice(0, 10);
    const body = ROUTES.flatMap((r) => LOCALES.map((l) => urlEntry(r, l, lastmod))).join("");
    const xml = `<?xml version="1.0" encoding="UTF-8"?>` +
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${body}</urlset>`;

    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=604800");
    res.write(xml);
    res.end();
    return {props: {}};
}

export default function Sitemap() {
    return null;
}
