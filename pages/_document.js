import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initalProps = await Document.getInitialProps(ctx);

    return initalProps;
  }

  render() {
    return (
      <Html dir="ltr">
        <Head>
          <meta charSet="UTF-8"></meta>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>

          <meta name="description" content="Tailwind Dashboard Template"></meta>

          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&amp;display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
