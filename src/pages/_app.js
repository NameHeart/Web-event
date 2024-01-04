import { ThemeProvider } from "styled-components";
import theme from "../styles/theme.json";
import { GlobalStyle } from "@/styles/GlobalStyle";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
