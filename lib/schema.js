import {SITE_URL, SITE_NAME, SAME_AS, OG_IMAGE, localizedUrl, LANG_TAG} from "./site";

export const PERSON_ID = `${SITE_URL}/#person`;
export const ORG_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * Structured data deliberately omits email and phone: everything Google needs
 * is the URL of the contact page, and scrapers get nothing to harvest.
 */
export function personSchema(locale = "de") {
    const de = locale === "de";
    return {
        "@type": "Person",
        "@id": PERSON_ID,
        name: SITE_NAME,
        givenName: "Marvin",
        familyName: "Hülsmann",
        url: SITE_URL,
        image: OG_IMAGE.url,
        jobTitle: de ? "Webdesigner & Apple-Entwickler" : "Web designer & Apple developer",
        description: de
            ? "Student, Unternehmer und Apple-Entwickler aus Berlin. Entwickelt Apps für iPhone, Apple Watch und Vision Pro sowie individuelle Websites."
            : "Student, entrepreneur and Apple developer from Berlin. Builds apps for iPhone, Apple Watch and Vision Pro as well as custom websites.",
        address: {"@type": "PostalAddress", addressLocality: "Berlin", postalCode: "10115", addressCountry: "DE"},
        knowsAbout: ["Webdesign", "Web Development", "iOS", "Swift", "SwiftUI", "visionOS", "watchOS", "Next.js", "React", "UI/UX Design", "SEO"],
        knowsLanguage: ["de", "en"],
        sameAs: SAME_AS,
        worksFor: {"@id": ORG_ID},
    };
}

export function businessSchema(locale = "de", {areaServed} = {}) {
    const de = locale === "de";
    return {
        "@type": "ProfessionalService",
        "@id": ORG_ID,
        name: `${SITE_NAME} – Webdesign & App-Entwicklung`,
        url: SITE_URL,
        image: OG_IMAGE.url,
        logo: `${SITE_URL}/Logo-Extra-Big-Red.png`,
        description: de
            ? "Webdesign, Web-Entwicklung und Apple-App-Entwicklung (iOS, watchOS, visionOS) aus Berlin – für Kunden in ganz Deutschland."
            : "Web design, web development and Apple app development (iOS, watchOS, visionOS) from Berlin – for clients across Germany.",
        founder: {"@id": PERSON_ID},
        address: {"@type": "PostalAddress", streetAddress: "Wöhlertstraße 21", addressLocality: "Berlin", postalCode: "10115", addressCountry: "DE"},
        vatID: "DE353408902",
        priceRange: "€€",
        areaServed: areaServed || {"@type": "Country", name: "Germany"},
        availableLanguage: ["German", "English"],
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            url: `${SITE_URL}/de/work`,
            availableLanguage: ["German", "English"],
        },
        sameAs: SAME_AS,
        knowsAbout: ["Webdesign", "Webentwicklung", "App-Entwicklung", "iOS", "SwiftUI", "Next.js", "SEO"],
    };
}

export function websiteSchema(locale = "de") {
    return {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: LANG_TAG[locale],
        publisher: {"@id": PERSON_ID},
    };
}

export function breadcrumbSchema(items, locale) {
    return {
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.name,
            item: localizedUrl(item.path, locale),
        })),
    };
}

export function faqSchema(faqs) {
    return {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {"@type": "Answer", text: f.a},
        })),
    };
}

export function serviceSchema({name, description, city, path, locale}) {
    return {
        "@type": "Service",
        name,
        description,
        serviceType: "Webdesign, Webentwicklung, App-Entwicklung",
        url: localizedUrl(path, locale),
        provider: {"@id": ORG_ID},
        areaServed: [
            {"@type": "City", name: city.name},
            {"@type": "State", name: city.stateName},
            {"@type": "Country", name: "Germany"},
        ],
        availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl: localizedUrl("/work", locale),
            availableLanguage: ["German", "English"],
        },
    };
}

/** Wrap one or more nodes into a single JSON-LD graph. */
export function graph(...nodes) {
    return {"@context": "https://schema.org", "@graph": nodes.flat().filter(Boolean)};
}
