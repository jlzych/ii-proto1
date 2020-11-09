const palette = {
  neutral100: '#FFFCF7',
  neutral150: '#FEF8ED',
  neutral200: '#FFF0E1',
  neutral400: '#B79A7D',
  neutral500: '#825D34',
  neutralShadow: 'rgba(130, 93, 52, 0.05)', // neutral500 is base color

  green100: '#D8FAF2',
  green200: '#CAF5ED',
  green300: '#84dace',
  green400: '#A2DFD5',
  green500: '#3C968A',
  green700: '#286C68',

  pink100: '#FFF0E1',
  pink200: '#FEDDDE',
  pink300: '#FAC9D2',
  pinkShadow: 'rgba(255, 240, 225, 0.6)', // pink100 is base color
};

export default {
  colors: {
    background: palette.neutral100,
    backgroundGradient: 'linear-gradient(180deg, ' + palette.neutral100 + ' 15.1%, #FFFFFF 100%)',

    text: palette.neutral500,
    textHidden: palette.neutral150,
    textPlaceholder: palette.neutral400,
    textHighlightBackground: palette.pink300,

    buttonBackground: palette.green200,
    buttonBackgroundHover: palette.green100,
    buttonBackgroundActive: palette.green400,
    buttonBorder: palette.green300,
    buttonText: palette.green500,

    buttonBackgroundInverted: palette.green500,
    buttonBackgroundInvertedHover: palette.green700,
    buttonBackgroundInvertedActive: palette.green500,
    buttonTextInverted: palette.green200,

    formControlBackground: 'white',
    inputBorderFocus: palette.pink300,
  },

  typography: {
    baseFontFamily: 'itc-american-typewriter, Courier, sans-serif',
    baseWeight: '500',
    boldWeight: '500',
    baseSize: '18px',
    baseLineHeight: '1.4',

    controlsFontFamily: 'Verdana, sans-serif',
    controlsFontSize: '16px',

    titleSize: '1.1rem',
  },

  borderRadii: {
    standard: '4px',
  },

  shadows: {
    button: '0 1px 1px ' + palette.pinkShadow + ',' +
            '0 2px 2px ' + palette.pinkShadow + ',' +
            '0 4px 4px ' + palette.pinkShadow,
    input:
      '0 1px 2px 1px ' + palette.pinkShadow + ',' +
      '0 2px 4px 1px ' + palette.pinkShadow + ',' +
      '0 3px 6px 1px ' + palette.pinkShadow,
  },

  spacing: {
    horizontal: '1rem',
    vertical: '1rem',
    inputPadding: '0.4rem',
  },

  transitionTiming: {
    snappy: '200ms ease-in',
    snappiest: '100ms ease-out',
    focusMode: '2s cubic-bezier(0.5, 0, 0.75, 0)', /* Quartatic ease in function. From https://easings.net/#easeInQuart */
  },

  breakpoint: '1050px',
};
