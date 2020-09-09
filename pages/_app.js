import { ThemeProvider } from 'emotion-theming';
import theme from '../theme/theme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../components/Header/Header';
import StrapiService from '../components/StrapiService/StrapiService';
import { CacheProvider } from '@emotion/core';
import { cache } from 'emotion';
import GlobalStyles from '../theme/GlobalStyles';

function MyApp({ Component, pageProps, importantMessage }) {
  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={cache}>
        <GlobalStyles />
        <Header
          importantMessageJson={importantMessage}
        />
        <Component {...pageProps} />
      </CacheProvider>
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async () => {
  const strapiService = new StrapiService();
  const importantMessage = await strapiService.getImportantMessage();
  const { API_URL } = process.env;

  return {
    importantMessage,
    API_URL,
  };
};

export default MyApp;
