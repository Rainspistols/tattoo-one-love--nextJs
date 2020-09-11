import EmotionTheme from '../theme/EmotionTheme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GlobalStyles from '../theme/GlobalStyles';
import { CacheProvider } from '@emotion/core';
import { cache } from 'emotion';
import useBreakpoint from '../hooks/useBreakpoint';
import StrapiService from '@/components/StrapiService/StrapiService';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

const queries = {
  mobile: '(max-width: 1279px)',
  desktop: '(min-width: 1280px)',
};

function MyApp({ Component, pageProps, importantMessageJson }) {
  const matchPoints = useBreakpoint(queries);

  return (
    <EmotionTheme>
      <CacheProvider value={cache}>
        <GlobalStyles />

        <Header importantMessageJson={importantMessageJson} />

        <Component {...pageProps} matchPoints={matchPoints} />

        <Footer />
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
