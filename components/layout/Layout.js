import Head from "next/head";
import Nav from "./Nav";
import Footer from "../Footer";

export default function Layout({title, description, children}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
                <meta property="og:title" content={title}/>
                <meta property="og:description" content={description}/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content="/StandUpMarvin2.jpeg"/>
            </Head>
            <Nav/>
            <main className="relative">{children}</main>
            <Footer/>
        </>
    )
}
