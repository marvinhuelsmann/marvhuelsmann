import Head from 'next/head'
import Navbar from '../components/Navbar'
import {useEffect} from "react";
import {
    ExternalLinkIcon, SunIcon
} from '@heroicons/react/outline'
import useSWR from 'swr'

const API_URL = "https://api.github.com/users/marvinhuelsmann/repos"

async function fetcher(url) {
    const res = await fetch(url);
    return await res.json();
}

function GitHubProjects() {
    const {data, error} = useSWR(API_URL, fetcher);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    console.log(data)

    return (
        <div className="mt-4">
            <div className=" mx-auto grid items-center flex justify-center">
                <div>
                    <h2 className="text-3xl mt-5 font-extrabold tracking-tight text-gray-900 dark:text-gray-400 sm:text-4xl">GitHub Repositories</h2>
                    <p className="mt-4 text-gray-500 dark:text-gray-300">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                        accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-2 gap-y-5 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-4">
                        {data.map((project) => (
                            <div key={project.name} className="border-t border-gray-200 pt-3">
                                <dt className="font-bold text-gray-900 dark:text-gray-400 flex">{project.name} <a href={project.html_url}><ExternalLinkIcon className="h-6 w-6 dark:text-gray-700 text-gray-300 hover:text-gray-500 dark:hover:text-gray-500" aria-hidden="true"/></a></dt>
                                <dd className="pt-1 font-medium text-gray-500 dark:text-gray-300">{project.description} </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    useEffect(() => {

        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    })
    return (
        <div className="min-h-screen py-2 dark:bg-black">
            <Head>
                <title>Marvin Hülsmann</title>
                <link rel="icon" href="/public/LogoExtraBig.svg"/>
                <link href="https://fonts.googleapis.com/css?family=DM+Sans:400,500|Jost:400,500,600&display=swap"
                      rel="stylesheet"/>
            </Head>

            <Navbar/>

            <main>
                <div
                    className={"bg-gradient-to-r from-purple-300 via-indigo-500 to-green-800  flex flex-col items-center justify-center w-full flex-1 px-20 text-center"}>
                    <div className="mt-64 mb-64">
                        <h1 className="xl:text-7xl text-shadow md:text-6xl text-4xl text-white">
                            <strong>Meine Projekte</strong>
                        </h1>
                    </div>
                </div>
                <div className={"mt-7"}>
                    <div className={"flex xl:pl-7 pl-2"}>
                        <GitHubProjects/>
                    </div>
                </div>
            </main>

            <footer className="flex mt-12 bg-white items-center justify-center w-full h-24">
                <a
                    className="flex items-center justify-center"
                    href="https://marvhuelsmann.com"
                    rel="noopener noreferrer"
                >
                    <img src="/LogoSmall.svg" alt="MH Logo" className="h-14 ml-2"/>
                </a>
            </footer>
        </div>
    )
}