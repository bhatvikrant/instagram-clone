import type { AppProps /*, AppContext */ } from "next/app";
import Head from "next/head";

// GLOBAL STYLES
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Instagram clone by Vikrant Bhat</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
