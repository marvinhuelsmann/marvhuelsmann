import {useEffect, useState} from "react";
import {getContactMail, getInfoMail, getPhone, getPhoneHref} from "../lib/contact";

/**
 * Renders an email address or phone number that is invisible to crawlers:
 * the server output only contains a neutral placeholder, the real value is
 * assembled after hydration and the href is attached on first interaction.
 */
function useReveal(getValue) {
    const [value, setValue] = useState(null);
    useEffect(() => {
        setValue(getValue());
    }, [getValue]);
    return value;
}

function ProtectedLink({getValue, getHref, placeholder, className, children, ...rest}) {
    const value = useReveal(getValue);
    const [href, setHref] = useState(undefined);
    const arm = () => {
        if (!href) setHref(getHref());
    };

    return (
        <a
            {...rest}
            href={href}
            onPointerEnter={arm}
            onFocus={arm}
            onTouchStart={arm}
            onClick={(e) => {
                if (!href) {
                    e.preventDefault();
                    window.location.href = getHref();
                }
            }}
            className={className}
            role={href ? undefined : "link"}
            tabIndex={0}
        >
            {children ? children(value) : (value ?? placeholder)}
        </a>
    )
}

export function ProtectedMail({info = false, placeholder = "E-Mail", children, ...props}) {
    const get = info ? getInfoMail : getContactMail;
    return (
        <ProtectedLink
            getValue={get}
            getHref={() => `mailto:${get()}`}
            placeholder={placeholder}
            {...props}
        >
            {children}
        </ProtectedLink>
    )
}

export function ProtectedPhone({placeholder = "Telefon", children, ...props}) {
    return (
        <ProtectedLink
            getValue={getPhone}
            getHref={getPhoneHref}
            placeholder={placeholder}
            {...props}
        >
            {children}
        </ProtectedLink>
    )
}

/** Plain-text variant for places where a link would be wrong (e.g. inside an address block). */
export function ProtectedText({kind = "mail", placeholder = "…"}) {
    const value = useReveal(kind === "phone" ? getPhone : kind === "info" ? getInfoMail : getContactMail);
    return <span>{value ?? placeholder}</span>;
}
