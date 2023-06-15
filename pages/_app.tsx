import type { AppProps } from "next/app";
import "katex/dist/katex.min.css";
import "../styles/css-reset.css";
import "../styles/global.css";
import { Global, css } from "@emotion/react";
import { colors } from "@ui/design-tokens";
import "@fontsource/heebo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Global styles={{}} />
      <Component {...pageProps} />
    </main>
  );
}
