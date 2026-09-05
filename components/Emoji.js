/**
 * Apple-emoji artwork used inline in headlines. Sized relative to the surrounding font.
 */
export default function Emoji({src, alt = "", className = ""}) {
    return (
        <img
            src={src.src || src}
            alt={alt}
            aria-hidden={alt === "" ? "true" : undefined}
            className={`inline-block h-[0.95em] w-auto align-[-0.12em] select-none ${className}`}
            draggable="false"
        />
    )
}
