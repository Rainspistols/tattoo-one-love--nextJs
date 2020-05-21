import { ThemeProvider } from 'emotion-theming';
import theme from '../theme/theme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GlobalStyles from '../components/GlobalStyles/GlobalStyles';
import Header from '../components/Header/Header';
import cookies from 'next-cookies';

function MyApp({ Component, pageProps, importantMessageData, categories }) {
  console.log(importantMessageData, categories);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header
        importantMessageData={importantMessageData}
        categories={categories}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const { API_URL } = process.env;

  const resImportantMessage = await fetch(`${API_URL}/important-message`);
  const importantMessage = await resImportantMessage.json();
  const importantMessageStatusChecked = importantMessage.statusCode
    ? null
    : importantMessage;

  const resCategories = await fetch(`${API_URL}/post-categories`);
  const categories = await resCategories.json();

  return {
    importantMessageData: cookies(ctx)['im-stop-download']
      ? null
      : importantMessageStatusChecked,

    categories: categories.map(({ slug, category, id }) => ({
      slug,
      category,
      id,
    })),
  };
};

export default MyApp;
