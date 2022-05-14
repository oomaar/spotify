import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../global/GlobalStyle";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}
