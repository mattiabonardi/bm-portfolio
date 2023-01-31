import "../styles/globals.css";
import type { AppProps } from "next/app";
import { printToConsole, printToDOMasComment } from "bm-signature";
import { createRef, useEffect } from "react";
import { Header } from "../components/Header";

export default function App({ Component, pageProps }: AppProps) {
  const signature = createRef<HTMLDivElement>();
  // print signature to console
  printToConsole();
  useEffect(() => {
    if (signature.current) {
      // print signature to DOM as comment
      printToDOMasComment(signature.current);
    }
  }, []);
  return (
    <>
      <div ref={signature}></div>
      <Header></Header>
      <Component {...pageProps} />
    </>
  );
}
