/**
 * Hand-curated, live projects. GitHub repositories are merged in at runtime.
 */
export const FEATURED = [
    {
        name: "DoThis",
        homepage: "https://apps.apple.com/de/app/dothis/id6744120353",
        description: "An AI travel companion for adventures around the world.",
        platform: "ios",
        store: true,
    },
    {
        name: "Trinkspiele",
        homepage: "https://trinkspiele.click",
        description: "Drinking games to play together in the browser – join with a QR code, synced live on every phone.",
        platform: "web",
    },
    {
        name: "MemoJournal",
        homepage: "https://apps.apple.com/de/app/memojournal/id6502835696",
        description: "A voice diary for iPhone. Speak your day and AI turns it into clean, searchable entries.",
        platform: "ios",
        store: true,
    },
    {
        name: "BookyTrack",
        homepage: "https://apps.apple.com/de/app/bookytrack/id6479989211",
        description: "A watchOS app for book lovers. Mark your page and pick up right where you left off.",
        platform: "watch",
        store: true,
    },
    {
        name: "MH Creations",
        homepage: "https://mhcreations.de",
        description: "Custom websites, designed around your business.",
        platform: "business",
    },
    {
        name: "Transporter",
        homepage: "https://transporter-git-main-marvinhuelsmann.vercel.app",
        description: "Move images and folders quickly and securely.",
        platform: "web",
    },
];

export const APP_STORE_COUNT = FEATURED.filter((p) => p.store).length;

export const PLATFORM_STYLE = {
    ios: {gradient: "from-[#0a84ff] to-[#5ac8fa]", glow: "10,132,255", label: "platform.ios"},
    watch: {gradient: "from-[#ff2d55] to-[#ff9f0a]", glow: "255,45,85", label: "platform.watch"},
    vision: {gradient: "from-[#bf5af2] to-[#5e5ce6]", glow: "191,90,242", label: "platform.vision"},
    web: {gradient: "from-[#30d158] to-[#64d2ff]", glow: "48,209,88", label: "platform.web"},
    business: {gradient: "from-[#ff5a3c] to-[#ffb340]", glow: "255,90,60", label: "platform.business"},
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
