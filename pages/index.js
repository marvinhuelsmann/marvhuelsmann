import {useRouter} from "next/router";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import Layout from "../components/layout/Layout";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Projects from "../components/home/Projects";
import CTA from "../components/home/CTA";
import {graph, personSchema, businessSchema, websiteSchema} from "../lib/schema";

export async function getStaticProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    }
}

export default function Home() {
    const {t} = useTranslation("common");
    const {locale} = useRouter();
    const jsonLd = graph(websiteSchema(locale), personSchema(locale), businessSchema(locale));

    return (
        <Layout
            title={t("meta.home.title")}
            description={t("meta.home.description")}
            jsonLd={jsonLd}
            type="profile"
        >
            <Hero/>
            <About/>
            <Projects/>
            <CTA/>
        </Layout>
    )
}
