import React from 'react';
import Head from "next/head";
import Navbar from "../../components/Navbar";
import {useRouter} from "next/router";
import useSWR from "swr";
import {fetchGetJSON} from "../../util/api-helper";

export default function PreviewPage() {
    React.useEffect(() => {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

    }, []);

    const router = useRouter()
    const {data, error} = useSWR(
        router.query.session_id
            ? `/api/${router.query.session_id}`
            : null,
        fetchGetJSON
    )

    if (data !== undefined && data != null) {
        data['statusCode'] = 34;
    }

    return (
        <div className="min-h-screen dark:bg-black">
            <Head>
                <title>Marvin Hülsmann</title>
                <link rel="icon" href="https://i.imgur.com/duXild5.png"/>
                <link href="https://fonts.googleapis.com/css?family=DM+Sans:400,500|Jost:400,500,600&display=swap"
                      rel="stylesheet"/>
            </Head>

            <Navbar/>

            <main>
                <div
                    className={"bg-gradient-to-r from-purple-400 via-indigo-700 to-green-600  flex flex-col items-center justify-center w-full flex-1 px-20 text-center"}>
                    <div className="mt-64 mb-64">
                        <h1 className="xl:text-7xl text-shadow md:text-6xl text-4xl text-white">
                            <strong>Premium Edition</strong>
                        </h1>
                    </div>
                </div>
                <div className={"mt-10"}>
                    {(data?.payment_intent?.status === 'succeeded' && data != null &&
                        <div>
                            <div className={"flex xl:pl-7 pl-2"}>
                                <h2 className={"text-dark dark:text-white xl:text-5xl text-3xl"}>
                                    <strong>Vielen Dank!</strong>
                                </h2>
                            </div>
                            <div className={"justify-center text-center"}>
                                <h2 className={"text-dark font-bold text-4xl"}>Status: {data?.payment_intent?.status === 'succeeded' ? 'Erfolgreich' : 'Fehlgeschlagen' ?? 'loading...'}</h2>
                                <p className={"text-xl text-black dark:text-white mt-5"}>
                                    Ihre Bestellung wurde erfolgreich abgeschlossen, <br/>da die Bestellung nur im Sandbox Modus getätigt wurde erhältst du keine digitale Ware.
                                </p>
                            </div>
                        </div>
                    )}
                    {(data != null && <div>
                        {(data?.payment_intent?.status !== 'succeeded' && data['statusCode'] === 500 &&
                            <div className="rounded-md p-4 max-w-xl w-full mx-auto">
                                <div className="animate-pulse flex space-x-4">
                                    <div className="flex-1 space-y-6 py-1">
                                        <div className="h-2 bg-slate-700 rounded"/>
                                        <div className="space-y-3">
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="h-2 bg-slate-700 rounded col-span-2"/>
                                                <div className="h-2 bg-slate-700 rounded col-span-1"/>
                                            </div>
                                            <div className="h-2 bg-slate-700 rounded"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>)}
                    {(data == null && <div>
                        <div className="rounded-md p-4 max-w-xl w-full mx-auto">
                            <div className="animate-pulse flex space-x-4">
                                <div className="flex-1 space-y-6 py-1">
                                    <div className="h-2 bg-green-500 rounded"/>
                                    <div className="space-y-3">
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="h-2 bg-green-500 rounded col-span-2"/>
                                            <div className="h-2 bg-green-500 rounded col-span-1"/>
                                        </div>
                                        <div className="h-2 bg-green-500 rounded"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)}
                </div>
            </main>

            <footer className="flex mt-10 bg-white items-center justify-center w-full h-24">
                <a
                    className="flex items-center justify-center"
                    href="https://marvhuelsmann.com"
                    rel="noopener noreferrer"
                >
                    <img src="/LogoSmall.svg" alt="MH Logo" className="h-14 ml-2"/>
                </a>
            </footer>
        </div>
    );
}
