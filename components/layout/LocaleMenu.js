import {Menu, MenuButton, MenuItems, MenuItem} from "@headlessui/react";
import {useRouter} from "next/router";
import {IoGlobeOutline} from "react-icons/io5";
import {HiCheck} from "react-icons/hi";

export const LOCALES = [
    {code: "de", label: "Deutsch", short: "DE"},
    {code: "us", label: "English", short: "EN"},
    {code: "fr", label: "Français", short: "FR"},
    {code: "sp", label: "Español", short: "ES"},
];

export default function LocaleMenu({dark = false, align = "bottom end"}) {
    const router = useRouter();
    const current = LOCALES.find((l) => l.code === router.locale) || LOCALES[1];

    const switchLocale = (code) => {
        const {pathname, query, asPath} = router;
        router.push({pathname, query}, asPath, {locale: code, scroll: false});
    };

    return (
        <Menu>
            <MenuButton
                className={`group inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[13px] font-medium transition sm:px-3 sm:text-sm
                ${dark ? "text-white/80 hover:bg-white/10 hover:text-white" : "text-ink hover:bg-black/5"}`}
                aria-label="Language"
            >
                <IoGlobeOutline className="h-4 w-4 opacity-70 transition group-hover:opacity-100"/>
                <span>{current.short}</span>
            </MenuButton>
            <MenuItems
                anchor={align}
                transition
                className="z-[70] mt-2 w-44 origin-top rounded-2xl glass p-1.5 card-shadow outline-none transition duration-150 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
            >
                {LOCALES.map((l) => (
                    <MenuItem key={l.code}>
                        <button
                            type="button"
                            onClick={() => switchLocale(l.code)}
                            className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm text-ink data-[focus]:bg-black/5"
                        >
                            <span>{l.label}</span>
                            {l.code === current.code && <HiCheck className="h-4 w-4 text-coral"/>}
                        </button>
                    </MenuItem>
                ))}
            </MenuItems>
        </Menu>
    )
}
