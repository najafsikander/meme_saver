// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";

import "../styles/globals.scss";

import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}



export default MyApp;
