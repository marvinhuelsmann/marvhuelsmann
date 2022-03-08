import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import Head from "next/head";
import Navbar from "../../components/Navbar";
import axios from "axios";
import Image from "next/image";
import PremiumEdition from "../../public/marvhuelPremium.png";

export default function PreviewPage() {
    React.useEffect(() => {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, []);

    const stripePromise = loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    );
    const createCheckOutSession = async () => {
        const stripe = await stripePromise;
        const checkoutSession = await axios.post('/api/checkout_sessions');

        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id,
        });

        if (result.error) {
            console.log(result.error.message);
        }
    };
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
                    <div className={"flex xl:pl-7 pl-2"}>
                        <h2 className={"text-dark dark:text-white xl:text-5xl text-3xl"}>
                            <strong>Jetzt kaufen</strong>
                        </h2>
                    </div>
                    <div className={"justify-center text-center"}>
                        <button type="submit" onClick={createCheckOutSession}
                                className="text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                            </svg>
                            Für 12,99€ kaufen
                        </button>
                        <p className={"text-xs mt-2 text-black dark:text-white"}>
                            Diese Zahlung wird momentan aus Test<br/> Gründen nur im Sandbox Modus getätigt.
                        </p>
                    </div>
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
