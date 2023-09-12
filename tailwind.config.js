/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkFull: '#0F0F0F',
        dark950: '#141414',
        dark900: '#212121',
        dark800: '#292929',
        dark750: '#252525',
        dark700: '#303030',
        dark600: '#404040',
        dark500: '#6E6E6E',
        dark400: '#919191',
        dark300: '#ACACAC',
        dark200: '#C8C8C8',
        dark100: '#E1E1E1',
        dark50: '#F1F1F1',
        dark25: '#F8F8F8',
        dark10: '#F0F0F0',
        transWhite: '#FFFFFF98',
        primary50: '#FFF5FF',
        primary80: 'rgba(255, 255, 255, 0.8)',
        primary100: '#B5D687',
        primary200: '#93C154',
        primary150: '#A0CC62',
        primary: '#95C454',
        primaryOverride: '#95C454',
        primaryBright: '#95C454',
        darkPrimary: '#1E1E1E',
        borderLight: '#EFEFEF',
        borderDark: '#303030',
        secondary: '#A841D5',
        tertiary: '#D541B8',
        success: '#2ED47A',
        warning200: '#FFFF6E',
        warning900: '#A85407',
        warning: '#FFB800',
        error: '#FF4D00',
        lightError: '#FFDDE8',
        lightError200: '#FFB7B3',
      },
      backgroundImage: {
        lighthouse: 'url(\'./assets/images/lightHouseBg.png\')',
      },
      fontFamily: {
        openSauce: ['OpenSauce', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        archivo: ['Archivo', 'sans-serif'],
      },
      fontSize: {
        tiny: '8px',
        title: '5.610rem',
        h1: '4.209rem',
        h2: '3.157rem',
        h3: '2.369rem',
        subtitle1: '1.777rem',
        subtitle2: '1.333rem',
        subtitle3: '1.125rem',
        body: '1rem',
        caption1: '.75rem',
        'caption1.5': '.6rem',
        caption2: '.563rem',

        uTiny: '.6rem',
        uTitle: '5.610rem',
        uH1: '4.5rem',
        uH2: '3.5rem',
        uH3: '2.6rem',
        uSubtitle1: '1.95rem',
        uSubtitle2: '1.6rem',
        uSubtitle3: '1.3rem',
        uBody: '1.2rem',
        uCaption1: '1rem',
        'uCaption1.5': '.85rem',
        uCaption2: '.8rem',
      },
      minHeight: {
        60: '15rem',
      },
      maxHeight: {
        30: '7.313rem',
        32: '8.313rem',
        60.5: '15.063rem',
        396: '24.75rem',
      },
      minWidth: {
        140: '140px',
        150: '150px',
        250: '250px',
        320: '320px',
        316: '316px',
        20: '80px',
      },
      maxWidth: {
        55: '55px',
        95: '95px',
        tiny: '165px',
        316: '316px',
        238: '238px',
        150: '150px',
        250: '250px',
        850: '850px',
        1068: '1068px',
        'tr-11': '111px',
        1142: '1142px',
        1440: '1440px',
        848: '848px',
      },
      width: {
        14.5: '60px',
        34: '136px',
        42: '168px',
        500: '500px',
        '9/10': '90%',
      },
      height: {
        18: '4.5rem',
        640: '640px',
        22: '5.688rem',
        '11/20': '55%',
      },
      inset: {
        35: '35%',
        40: '40%',
        45: '45%',
      },
      zIndex: {
        top98: 998,
        top: 999,
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' },
        },
        blink: {
          '0%': { opacity: '100%' },
          '50%': { opacity: '100%' },
          '100%': { opacity: '0%' },
        },
        fadeSlideIn: {
          '0%': {
            opacity: '0%',
            transform: 'translateY(-5%);',
          },
          '100%': {
            opacity: '100%',
            transform: 'translateY(0);',
          },
        },
      },
      animation: {
        shake: 'shake 1s ease-in-out',
        'spin-slow': 'spin 240s linear infinite',
        blink: 'blink 1s linear infinite',
        fadeSlideIn: 'fadeSlideIn 150ms ease-in',
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
      },
      translate: {
        14.5: '60px',
        42: '168px',
        toggleWidth: '3rem',
      },
      screens: {
        '@425': '425px',
        '@1540': '1540px',
        '@1440': '1440px',
        '@1024': '1024px',
        '@1200': '1200px',
        '@1600': '1600px',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
    require('tailwindcss-scoped-groups')({
      groups: ['sidebar'],
    }),
    // eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
    require('tailwind-scrollbar-hide'),
  ],
}
