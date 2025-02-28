import "reflect-metadata";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import React, {ReactElement} from "react";
import theme from "../components/theme";
import {AppProps} from "next/app";
import {ThemeProvider} from "@mui/material/styles";
import "normalize.css";
import "../styles/global.scss";
import "react-markdown-editor-lite/lib/index.css";

import {CacheProvider} from "@emotion/react";
import createCache from "@emotion/cache";

const cache = createCache({key: "next"});

export default function App(props: AppProps): ReactElement {
  const {Component, pageProps} = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://use.fontawesome.com/releases/v5.12.0/css/all.css"
        />
      </Head>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </React.Fragment>
  );
}
