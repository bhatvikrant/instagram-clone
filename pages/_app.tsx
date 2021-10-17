import type { AppProps /*, AppContext */ } from "next/app";
import Head from "next/head";

import { SessionProvider } from "next-auth/react";

// GLOBAL STYLES
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Instagram clone by Vikrant Bhat</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
