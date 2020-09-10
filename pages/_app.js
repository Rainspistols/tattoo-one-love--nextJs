import { ThemeProvider } from 'emotion-theming';
import theme from '../theme/theme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Header from '../components/Header/Header';
import { CacheProvider } from '@emotion/core';
import { cache } from 'emotion';
import GlobalStyles from '../theme/GlobalStyles';

import useBreakpoint from '../hooks/useBreakpoint';

const queries = {
  mobile: '(max-width: 1279px)',
  desktop: '(min-width: 1280px)',
};

function MyApp({ Component, pageProps, importantMessage }) {
  const matchPoints = useBreakpoint(queries);

  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={cache}>
        <GlobalStyles />
        <Component {...pageProps} matchPoints={matchPoints} />
      </CacheProvider>
    </ThemeProvider>
  );
}

export default MyApp;
