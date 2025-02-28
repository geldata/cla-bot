import Document, {Head, Html, Main, NextScript} from "next/document";
import React, {ReactElement} from "react";
import theme from "../components/theme";

// See:
// https://github.com/zeit/next.js/issues/7322
// https://github.com/zeit/next.js/issues/7322#issuecomment-603933531

export default class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body className="compact">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
