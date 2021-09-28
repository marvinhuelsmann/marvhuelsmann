import {Fragment} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {
    BookmarkAltIcon,
    SunIcon,
    MenuIcon,
    ShieldCheckIcon,
    SupportIcon,
    XIcon,
} from '@heroicons/react/outline'
import {ChevronDownIcon} from '@heroicons/react/solid'
import {theme} from "../tailwind.config";

function changeTheme() {
    console.log(localStorage.theme);
    if (localStorage.theme === "white" || localStorage.theme === null || typeof localStorage.theme === "undefined") {
        localStorage.theme = "dark";
    } else if (localStorage.theme === "dark") localStorage.theme = "white";

    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}

const resources = [
    {
        name: 'Hilfe Center',
        description: 'Erhalte alle deine Fragen auf einer Seite beantwortet.',
        href: '/help-center',
        icon: SupportIcon,
    },
    {
        name: 'Projekte',
        description: 'Sehe dir ein paar meiner bereits entwickelten Projekte an.',
        href: '/projects',
        icon: BookmarkAltIcon,
    },
    {
        name: 'Impressum',
        description: 'Erfahre Rechtliche Kontaktdaten vom Inhaber dieser Website.',
        href: '/imprint',
        icon: ShieldCheckIcon
    },
]
const recentPosts = [
    {id: 1, name: 'Momentan sind keine Blog Beiträge vorhanden.', href: ''},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <Popover className="relative bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="/">
                            <span className="sr-only dark:text-white">Marvin Hülsmann</span>
                            <img
                                className="h-8 dark:hidden w-auto sm:h-10"
                                src="/LogoExtraBig.svg"
                                alt=""
                            />
                            <img
                                className="h-8 w-auto hidden dark:block light:none sm:h-10"
                                src="/LogoExtraBigWhiteMode.svg"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button
                            className="bg-white dark:bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Menu öffnen</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true"/>
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden md:flex space-x-10">

                        <a href="/contact"
                           className="text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-400">
                            Kontakt
                        </a>
                        <a href="/documentation"
                           className="text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-400">
                            Dokumentation
                        </a>

                        <Popover className="relative">
                            {({open}) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open ? 'text-gray-900 dark:text-gray-400' : 'text-gray-500',
                                            'group bg-white dark:bg-black rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 dark:hover:text-gray-400'
                                        )}
                                    >
                                        <span className={""}>Weiteres</span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open ? 'text-gray-600' : 'text-gray-400',
                                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                                            )}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel
                                            className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                                            <div
                                                className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    {resources.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                        >
                                                            <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                                       aria-hidden="true"/>
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                                <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                                                    <div>
                                                        <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">Neusten
                                                            Beiträge</h3>
                                                        <ul className="mt-4 space-y-4">
                                                            {recentPosts.map((post) => (
                                                                <li key={post.id} className="text-base truncate">
                                                                    <a href={post.href}
                                                                       className="font-medium text-gray-900 hover:text-gray-700">
                                                                        {post.name}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="mt-5 text-sm">
                                                        <a href="#"
                                                           className="font-medium text-blue-600 hover:text-blue-500">
                                                            {' '}
                                                            Sehe dir alle Beiträge an <span
                                                            aria-hidden="true">&rarr;</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                    </Popover.Group>
                    <div className="hidden cursor-pointer md:flex items-center justify-end md:flex-1 lg:w-0">
                        <a onClick={changeTheme}
                           className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium bg-black hover:bg-gray dark:bg-white dark:hover:bg-gray"
                        >
                            <SunIcon className="flex-shrink-0 h-6 w-6 dark:text-black text-white" aria-hidden="true"/>
                        </a>
                    </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus
                               className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div
                        className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="/LogoExtraBig.svg"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button
                                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Menu schließen</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true"/>
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                <a href="/contact" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Kontakt
                                </a>

                                <a href="/documentation"
                                   className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Dokumentation
                                </a>
                                {resources.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}

