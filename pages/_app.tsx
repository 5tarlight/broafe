import { theme } from "@/styles/theme";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* TODO : Theme selection */}
      <ThemeProvider theme={theme.white}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
