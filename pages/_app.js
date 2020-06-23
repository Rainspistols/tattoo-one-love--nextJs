import { ThemeProvider } from 'emotion-theming';
import theme from '../theme/theme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GlobalStyles from '../components/GlobalStyles/GlobalStyles';
import Header from '../components/Header/Header';
import { useState } from 'react';
import StrapiService from '../components/StrapiService/StrapiService';
import { CacheProvider } from '@emotion/core';
import { cache } from 'emotion';

function MyApp({ Component, pageProps, importantMessage, postsCategories }) {
  const [inputSearchValue, setInputSearchValue] = useState(null);

  const onSearchToGo = (ref) => {
    setInputSearchValue(ref.current.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={cache}>
        <GlobalStyles />
        <Header
          importantMessageJson={importantMessage}
          categories={postsCategories}
          onSearchToGo={onSearchToGo}
        />
        <Component {...pageProps} inputSearchValue={inputSearchValue} />
      </CacheProvider>
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async () => {
  const strapiService = new StrapiService();
  const importantMessage = await strapiService.getImportantMessage();
  const postsCategories = await strapiService.getPostsCategories();

  return {
    importantMessage,
    postsCategories,
  };
};

export default MyApp;
