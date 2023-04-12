import type { AppProps } from "next/app";
import "katex/dist/katex.min.css";
import "../styles/css-reset.css";
import "../styles/global.css";
import { Global, css } from "@emotion/react";
import { colors } from "@ui/design-tokens";

import { Heebo } from "next/font/google";

const heebo = Heebo({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={heebo.className}>
      <Global
        styles={{
          body: { backgroundColor: colors.secondary[200] },
        }}
      />
      <Component {...pageProps} />
    </main>
  );
}
