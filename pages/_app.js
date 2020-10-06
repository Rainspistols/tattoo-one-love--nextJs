import EmotionTheme from '../theme/EmotionTheme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GlobalStyles from '../theme/GlobalStyles';

import { BreakpointProvider } from '../utils/breakpoint';

import Footer from '@/components/Footer/Footer';
import Head from 'next/head';
// Seo
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import Header from '@/components/Header/Header';

function MyApp({ Component, pageProps }) {
  return (
    <EmotionTheme>
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
        <Header />

        <Component {...pageProps} />

        <Footer />
      </BreakpointProvider>
    </EmotionTheme>
  );
}

export default MyApp;
