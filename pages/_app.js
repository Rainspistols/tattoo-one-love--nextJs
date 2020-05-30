import { ThemeProvider } from 'emotion-theming';
import theme from '../theme/theme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GlobalStyles from '../components/GlobalStyles/GlobalStyles';
import Header from '../components/Header/Header';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

function MyApp({ Component, pageProps, importantMessageData, categories }) {
  const [inputSearchValue, setInputSearchValue] = useState(null);
  const [isImportantMessage, setImportantMessage] = useState(
    importantMessageData
  );

  useEffect(() => {
    if (Cookies.get('isImportantMessageDisabled')) {
      setImportantMessage(null);
    }
    if (isImportantMessage.text.length === 0) {
      setImportantMessage(null);
    }
  }, []);

  const onSearchToGo = (ref) => {
    setInputSearchValue(ref.current.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header
        importantMessageData={isImportantMessage}
        categories={categories}
        onSearchToGo={onSearchToGo}
      />
      <Component {...pageProps} inputSearchValue={inputSearchValue} />
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async () => {
  const { API_URL } = process.env;

  const resImportantMessage = await fetch(`${API_URL}/important-message`);
  const importantMessage = await resImportantMessage.json();

  const resCategories = await fetch(`${API_URL}/post-categories`);
  const categories = await resCategories.json();

  return {
    importantMessageData: importantMessage,
    categories,
  };
};

export default MyApp;
