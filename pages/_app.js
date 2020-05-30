import { ThemeProvider } from 'emotion-theming';
import theme from '../theme/theme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GlobalStyles from '../components/GlobalStyles/GlobalStyles';
import Header from '../components/Header/Header';
import cookies from 'next-cookies';
import { useState } from 'react';

function MyApp({ Component, pageProps, importantMessageData, categories }) {
  const [inputSearchValue, setInputSearchValue] = useState(null);

  const onSearchToGo = (ref) => {
    setInputSearchValue(ref.current.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header
        importantMessageData={importantMessageData}
        categories={categories}
        onSearchToGo={onSearchToGo}
      />
      <Component {...pageProps} inputSearchValue={inputSearchValue} />
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async (context) => {
  const { API_URL } = process.env;

  const resImportantMessage = await fetch(`${API_URL}/important-message`);
  const importantMessage = await resImportantMessage.json();
  const importantMessageStatusChecked = importantMessage.statusCode
    ? null
    : importantMessage;

  const resCategories = await fetch(`${API_URL}/post-categories`);
  const categories = await resCategories.json();

  return {
    importantMessageData: cookies(context)['im-stop-download']
      ? null
      : importantMessageStatusChecked,

    categories,
  };
};

export default MyApp;
