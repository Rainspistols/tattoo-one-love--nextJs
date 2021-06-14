import { ThemeProvider } from '@emotion/react';

const theme = {
  colors: {
    pink: '#F11E9C',
    pink2: '#F41791',
    darkBlue: '#1D2B36',
    grey1: '#E8ECF1',
    grey2: '#B5CFD8',
    grey3: '#7393A7',
    grey4: '#6C737E',
    white: '#ffffff',
    pinkGradient: 'linear-gradient(280deg,#FF0099, #561616)',
    whiteGradient: 'linear-gradient(280deg,#D9A7C7, #FFFCDC)',
    black: '#000000',
    lightGrey: '#f4f4f4',
    lightBlue: '#D8E2EB'
  },

  vw: (px) => `${(px / 375) * 100}vw`,
  vw1920: (px) => `${(px / 1920) * 100}vw`,

  flex: {
    center: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    between: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },

  mediaDesktop: '@media (min-width: 1280px)',

  headerHeight: {
    mobile: `${(45 / 375) * 100}vw`,
    desktop: `${(94 / 1920) * 100}vw`,
  },
  footerHeight: {
    mobile: `${(400 / 375) * 100}vw`,
    desktop: `${(310 / 1920) * 100}vw`,
  },
};

const EmotionTheme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default EmotionTheme;
