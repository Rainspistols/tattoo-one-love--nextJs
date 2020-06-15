import { ThemeProvider } from 'emotion-theming';
import theme from '../theme/theme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GlobalStyles from '../components/GlobalStyles/GlobalStyles';
import Header from '../components/Header/Header';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import StrapiService from '../components/StrapiService/StrapiService';

function MyApp({ Component, pageProps, importantMessage, postsCategories }) {
  const [inputSearchValue, setInputSearchValue] = useState(null);
  const [isImportantMessage, setImportantMessage] = useState(null);

  useEffect(() => {
    Cookies.get('isImportantMessageDisabled') ||
    importantMessage.text.length === 0
      ? setImportantMessage(null)
      : setImportantMessage(importantMessage);
  }, [importantMessage]);

  const onSearchToGo = (ref) => {
    setInputSearchValue(ref.current.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header
        importantMessageData={isImportantMessage}
        categories={postsCategories}
        onSearchToGo={onSearchToGo}
      />
      <Component {...pageProps} inputSearchValue={inputSearchValue} />
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
