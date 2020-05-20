import { ThemeProvider } from 'emotion-theming';
import theme from '../theme/theme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GlobalStyles from '../components/GlobalStyles/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
