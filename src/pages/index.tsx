import Head from "next/head";
import { Header } from "@/components/header/Header";
import { Sidebar } from "@/components/Sidebar";
import { Units } from "@/components/general/Units";
export async function generateMetadata() {
  const seo = {
    meta_title: "Sakneen",
    meta_desc: "Sakneen",
    focus_keywords: "Sakneen",
    canonical: "/",
    og_image: "/logo.svg",
  };

  const pageTitle = seo.meta_title;

  const pageDescription = seo.meta_desc;
  const pageKeywords = seo.focus_keywords;

  return {
    title: `${pageTitle}`,
    description: `${pageDescription}`,
    keywords: pageKeywords,
    alternates: {
      canonical: seo.canonical,
      og_image: seo.og_image,
    },
  };
}
export default function Home() {
  return (
    <>
      <Head>
        <title>Sakneen</title>
        <meta name="description" content="Sakneen Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="max-w-[1438px] mx-auto flex gap-[27px]">
        <Sidebar />
        <Units />
      </main>
    </>
  );
}
