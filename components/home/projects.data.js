/**
 * Hand-curated, live projects. GitHub repositories are merged in at runtime.
 */
export const FEATURED = [
    {
        name: "DoThis",
        homepage: "https://apps.apple.com/de/app/dothis/id6744120353",
        description: "The ultimate AI travel companion app for adventures around the globe.",
        platform: "ios",
        store: true,
    },
    {
        name: "Trinkspiele",
        homepage: "https://trinkspiele.click",
        description: "Drinking games played together in the browser – join with a QR code, synced live on every phone.",
        platform: "web",
    },
    {
        name: "Textosy",
        homepage: "https://apps.apple.com/de/app/textosy/id6479321960",
        description: "visionOS app that revolutionizes text creation – immersive 3D texts.",
        platform: "vision",
        store: true,
    },
    {
        name: "BookyTrack",
        homepage: "https://apps.apple.com/de/app/textosy/id6479989211",
        description: "watchOS app for book lovers. Mark pages and continue reading effortlessly.",
        platform: "watch",
        store: true,
    },
    {
        name: "MH Creations",
        homepage: "https://mhcreations.de",
        description: "Unique and personalized websites for your business.",
        platform: "business",
    },
    {
        name: "Transporter",
        homepage: "https://transporter-git-main-marvinhuelsmann.vercel.app",
        description: "A file transporter to move images or folders quickly and securely.",
        platform: "web",
    },
];

export const APP_STORE_COUNT = FEATURED.filter((p) => p.store).length;

export const PLATFORM_STYLE = {
    ios: {gradient: "from-[#0a84ff] to-[#5ac8fa]", label: "platform.ios"},
    watch: {gradient: "from-[#ff2d55] to-[#ff9f0a]", label: "platform.watch"},
    vision: {gradient: "from-[#bf5af2] to-[#5e5ce6]", label: "platform.vision"},
    web: {gradient: "from-[#30d158] to-[#64d2ff]", label: "platform.web"},
    business: {gradient: "from-[#ff5a3c] to-[#ffb340]", label: "platform.business"},
};

export const LANGUAGE_COLOR = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    Swift: "#f05138",
    Java: "#b07219",
    Kotlin: "#a97bff",
    Python: "#3572a5",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Vue: "#41b883",
    Shell: "#89e051",
    Go: "#00add8",
    Rust: "#dea584",
    PHP: "#4f5d95",
    "C#": "#178600",
    "C++": "#f34b7d",
    Dart: "#00b4ab",
};
