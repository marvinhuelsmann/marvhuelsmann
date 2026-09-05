import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Layout from "../components/layout/Layout";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Projects from "../components/home/Projects";
import CTA from "../components/home/CTA";

export async function getStaticProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    }
}

export default function Home() {
    return (
        <Layout
            title="Marvin Hülsmann – Apps & Websites aus Berlin"
            description="Marvin Hülsmann: Student, Unternehmer und Apple-Entwickler aus Berlin. Apps für iPhone, Apple Watch und Vision Pro sowie individuelle Websites."
        >
            <Hero/>
            <About/>
            <Projects/>
            <CTA/>
        </Layout>
    )
}
