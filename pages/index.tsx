import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Instagram clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* =============== Header =============== */}
      <Header />
      {/* =============== Feed =============== */}
      {/* =============== Modal =============== */}
    </div>
  );
}
