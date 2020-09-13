import { ThemeProvider } from 'emotion-theming';

const theme = {
  colors: {
    pink: '#F11E9C',
    darkBlue: '#1D2B36',
    grey1: '#E8ECF1',
    grey2: '#B5CFD8',
    grey3: '#7393A7',
    grey4: '#6C737E',
    white: '#ffffff',
    pinkGradient: 'linear-gradient(280deg,#FF0099, #561616)',
    whiteGradient: 'linear-gradient(280deg,#D9A7C7, #FFFCDC)',
    black: '#000000',
  },

  vw: (px) => {
    return (px / 375) * 100 + 'vw';
  },
  vw1920: (px) => {
    return (px / 1920) * 100 + 'vw';
  },

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
};

const EmotionTheme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default EmotionTheme;
