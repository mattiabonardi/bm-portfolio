import "../styles/globals.css";
import type { AppProps } from "next/app";
import { printToDOMasComment } from "bm-signature";
import { createRef, useEffect } from "react";
import { Header } from "../components/Header";
import { IntroContextProvider } from "../context/intro";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const signature = createRef<HTMLDivElement>();
  useEffect(() => {
    if (signature.current) {
      // print signature to DOM as comment
      printToDOMasComment(signature.current);
    }
  }, []);
  return (
    <>
      <Head>
        <title>BM Portfolio</title>
      </Head>
      <IntroContextProvider {...pageProps}>
        <div ref={signature}></div>
        <Header></Header>
        <Component {...pageProps} />
      </IntroContextProvider>
    </>
  );
}
