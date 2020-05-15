const breakpoints = ['360px', '768px', '1024px', '1280px', '1600px'];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export default {
  colors: {
    pink: '#F11E9C',
    darkBlue: '#1D2B36',
    grey1: '#E8ECF1',
    grey2: '#B5CFD8',
    grey3: '#7393A7',
    grey4: '#6C737E',
    white: '#ffffff',
    pinkGradient: 'linear-gradient(280deg,#FF0099, #561616)',
  },

  pixelToVieWidth: (px) => {
    return (px / 375) * 100 + 'vw';
  },

  breakpoints,
};
