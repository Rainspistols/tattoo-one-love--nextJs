import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='pl'>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='content-language' content='pl-PL' />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          {/* Favicon */}

          {/* Fonts */}
          <link
            rel='preload'
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'
            rel='stylesheet'
            as='font'
            crossOrigin=''
          />
          {/* Meta */}
          <meta
            name='description'
            content='Studio tatuażu (Warszawa), które dziara, edukuje i pomaga w wyrażaniu siebie. Kliknij i dowiedz się, jak i gdzie zrobić sobie tatuaż, który zmieni twoje życie.'
          />
          <meta name='keywords' content='studio tatuażu warszawa' />
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
