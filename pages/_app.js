import EmotionTheme from '../theme/EmotionTheme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GlobalStyles from '../theme/GlobalStyles';
import Head from 'next/head';

import { BreakpointProvider } from '../utils/breakpoint';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
// Seo
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { useState } from 'react';
import ImportantMessage from '@/components/ImportantMessage/ImportantMessage';

function MyApp({ Component, pageProps }) {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [imIsVisible, setImIsVisible] = useState(true);

  return (
    <EmotionTheme>
      <BreakpointProvider>
        <GlobalStyles />
        <DefaultSeo {...SEO} />
        <Head>
          <meta httpEquiv="content-language" content="pl-PL" />
          <meta name="keywords" content="studio tatuażu warszawa" />
          {/* Favicon */}
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          {/* Fonts */}
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
            as="font"
            crossOrigin=""
          />
        </Head>

        <ImportantMessage
          setImIsVisible={setImIsVisible}
          imIsVisible={imIsVisible}
          headerHeight={headerHeight}
        />
        <Header setHeaderHeight={setHeaderHeight} />

        <main style={!imIsVisible ? { marginTop: headerHeight } : null}>
          <Component {...pageProps} headerHeight={headerHeight} />
        </main>

        <Footer />
      </BreakpointProvider>
    </EmotionTheme>
  );
}

export default MyApp;
