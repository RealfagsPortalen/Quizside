import type { AppProps } from "next/app";
import "katex/dist/katex.min.css";
import "../styles/css-reset.css";
import "../styles/global.css";

import { Heebo } from "next/font/google";

const heebo = Heebo({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={heebo.className}>
      <Component {...pageProps} />
    </main>
  );
}
