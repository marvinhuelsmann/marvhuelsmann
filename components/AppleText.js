import {Fragment} from "react";
import {BsApple} from "react-icons/bs";

/**
 * Renders a translated string with "Apple" swapped for the Apple logo wherever
 * it names Apple apps: "Apple apps" (EN), "Apple-Apps" (DE), "apps Apple" (FR),
 * "apps para Apple" (ES). An SVG, because the  glyph only exists on Apple devices.
 */
const PATTERN = /Apple-?(?=\s?[Aa]pps?\b)|(?<=\b[Aa]pps (?:para )?)Apple\b/g;

export function AppleLogo({className = ""}) {
    return (
        <BsApple
            role="img"
            aria-label="Apple"
            className={`inline-block h-[0.86em] w-auto align-[-0.06em] ${className}`}
        />
    )
}

export default function AppleText({children}) {
    if (typeof children !== "string") return children;
    const parts = [];
    let last = 0;
    for (const m of children.matchAll(PATTERN)) {
        parts.push(children.slice(last, m.index));
        parts.push(<AppleLogo key={m.index}/>);
        if (m[0].endsWith("-")) parts.push("\u00a0"); // German "Apple-Apps" becomes logo + space + "Apps"
        last = m.index + m[0].length;
    }
    if (!parts.length) return children;
    parts.push(children.slice(last));
    return parts.map((p, i) => <Fragment key={i}>{p}</Fragment>);
}
