import EmotionTheme from '../theme/EmotionTheme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GlobalStyles from '../theme/GlobalStyles';
import { CacheProvider } from '@emotion/core';
import { cache } from 'emotion';
import { BreakpointProvider } from '../utils/breakpoint';
import StrapiService from '@/components/StrapiService/StrapiService';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Head from 'next/head';
// Seo
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps, importantMessageJson }) {
  return (
    <EmotionTheme>
      <CacheProvider value={cache}>
        <BreakpointProvider>
          <GlobalStyles />

          <DefaultSeo {...SEO} />

          <Head>
            <meta httpEquiv='content-language' content='pl-PL' />
            <meta name='keywords' content='studio tatuażu warszawa' />
            {/* Favicon */}
            <link rel='shortcut icon' href='/favicon/favicon.ico' />
            {/* Fonts */}
            <link
              rel='preload'
              href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'
              rel='stylesheet'
              as='font'
              crossOrigin=''
            />
            {/* Meta */}
          </Head>

          <Header importantMessageJson={importantMessageJson} />

          <Component {...pageProps} />

          <Footer />
        </BreakpointProvider>
      </CacheProvider>
    </EmotionTheme>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const strapiService = new StrapiService();
  const importantMessageJson = await strapiService.getImportantMessage();

  return {
    importantMessageJson,
  };
};

export default MyApp;
