/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      spacing: {
        1.25: '0.3125rem', // 5px
        3.75: '0.9375rem', // 15px
        4.25: '1.0625rem', // 17px
        4.5: '1.125rem', // 18px
        6.5: '1.625rem', // 26px
        7.5: '1.875rem', // 30px
        8.75: '2.1875rem', //35px
        10.25: '2.5625rem', // 41px
        11: '2.75rem', // 44px
        11.5: '2.875rem', // 46px
        12: '3rem', // 48px
        12.5: '3.125rem', // 50px
        13: '3.25rem', // 52px
        14.5: '3.625rem', // 58px
        15: '3.75rem', // 60px
        16.5: '4.125rem', // 66px
        17: '4.25rem', // 68px
        17.5: '4.375rem', // 70px
        18: '4.5rem', // 72px
        19.5: '4.875rem', // 78px
        18.8: '4.7rem', // 80px
        19.75: '4.9375rem', // 79px
        22.25: '5.5625rem', // 89px
        24.5: '6.125rem', // 98px
        25: '6.25rem', // 100px
        26: '6.5rem', // 104px
        26.5: '6.625rem', // 106px
        28: '7rem', // 112px
        30: '7.5rem', // 120px
        31: '7.75rem', // 124px
        32.5: '8.125rem', // 130px
        33: '8.25rem', // 132px
        34: '8.5rem', // 136px
        35: '8.75rem', // 140px
        39: '9.75rem', // 156px
        42: '10.5rem', // 168px
        42.5: '10.625rem', // 170px
        45: '11.25rem', // 180px
        45.25: '11.3125rem', // 181px
        47: '11.75rem', // 188px
        48: '12rem', // 192px
        50.5: '12.625rem', // 202px
        52.5: '13.125rem', // 210px
        55: '13.75rem', // 220px
        58.25: '14.5625rem', // 233px
        60: '15rem', // 240px
        61.5: '15.375rem', // 246px
        65: '16.25rem', // 260px
        70: '17.5rem', // 280px
        73: '18.25rem', // 292px
        74: '18.5rem', // 296px
        75: '18.75rem', // 300px
        79: '19.75rem', //316px
        80.5: '20.615rem', // 322px
        85.25: '21.3125rem', // 341px
        85.75: '21.4375rem', // 343px
        86.25: '21.5625rem', // 345px
        87: '21.75rem', // 348px
        90.5: '22.625rem', // 362px
        92.5: '23.125rem', // 370px
        92.75: '23.1875rem', // 371px
        93: '23.25rem', // 372px
        94: '23.5rem', //376px
        95: '23.75rem', // 380px
        97.5: '24.375rem', // 390px
        100: '25rem', // 400px
        103.75: '25.9375rem', // 415px
        106: '26.5rem', // 424px
        110: '27.5rem', // 440px
        113.25: '28.3125rem', // 453px
        114: '28.5rem', // 456px
        119: '29.75rem', //476px
        120: '30rem', // 480px
        124: '31rem', // 496px
        125: '31.25rem', // 500px
        135: '33.75rem', // 540px
        140: '35rem', // 560px
        144.75: '36.1875rem', // 579px
        145: '36.25rem', // 580px
        147: '36.875rem', // 590px
        154: '38.5rem', // 616px
        157.5: '39.375rem', //630px
        151: '37.875rem', // 606px
        156: '39rem', // 624px
        157.75: '39.4375rem', // 631px
        160.25: "40.0625", // 641px
        162: '40.5rem', // 648px
        165: '41.25rem', // 660px
        170: '42.5rem', // 680px
        173: '43.25rem', // 692px
        182.5: '45.625rem', // 730px
        185.5: '46.375rem', // 748px
        195: '48.75rem', // 780px
        197.5: '49.375rem', // 790px
        207.75: '51.9375rem', // 831px
        220: '55rem', // 880px
        233: '58.25rem', // 932px
        245: '61.25rem', // 980px
        266.75: '66.6875rem', // 1067px
        286.25: '71.5625rem', // 1145px
        295: '73.75rem', // 1180px
        311.5: '77.875rem', // 1246px
        480: '120rem', // 1920px
      },
      letterSpacing: {
        not_found_page: '0.29rem',
        404: '-0.05rem',
      },
      textUnderlineOffset: {
        5: '5px',
      },
      colors: {
        accent: { base: '#E1326E', additional: '#FA3778' },
        attention: { base: '#FF4545' },
        primary: { base: '#6E285F', additional: '#873273' },
        secondary: { base: '#FFCD32', additional: '#FFBE00' },
        attention: { base: '#FF4545' },
        gray: {
          white: '#FFFFFF',
          details: '#A0A0A0',
          dark: '#454545',
          stroke: '#E7E7E7',
          card: '#F5F5F5',
          gray2: '#E1E1E1',
        },
      },
      backgroundImage: {
        404: 'url("/assets/images/404.svg")',
        about: 'url("/assets/images/about block/about_image.jpg")',
        our_symbol: 'url("/assets/images/our_idea/our_symbol_bg.jpg")',
        checkbox: 'url("/assets/icons/contacts/checked.svg")',
      },
      borderRadius: {
        30: '30px',
        10: '10px',
        8: '8px',
      },

      fontSize: {
        menu: [
          '1.125rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '600',
          },
        ],
        details: [
          '0.875rem',
          {
            lineHeight: '1.25rem',
            fontWeight: '400',
          },
        ],
        'details-bold': [
          '0.875rem',
          {
            lineHeight: '1.25rem',
            fontWeight: '600',
          },
        ],
        'smaller-main': [
          '1rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '400',
          },
        ],
        'smaller-bold': [
          '1rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '600',
          },
        ],
        'main-text': [
          '1.125rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '400',
          },
        ],
        'main-text-bold': [
          '1.125rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '600',
          },
        ],
        'h1-narrow': [
          '2.375rem',
          {
            lineHeight: '3rem',
            fontWeight: '600',
          },
        ],
        'h1-narrow-big': [
          '3rem',
          {
            lineHeight: '3.75rem',
            fontWeight: '600',
          },
        ],
        'h1-heading': [
          '2.375rem',
          {
            lineHeight: '3rem',
            fontWeight: '600',
            letterSpacing: '0.1em',
          },
        ],
        'h2-heading': [
          '1.625rem',
          {
            lineHeight: '2rem',
            fontWeight: '600',
            letterSpacing: '0.1em',
          },
        ],
        'h3-subheading': [
          '1.25rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '600',
          },
        ],
        'impact-card-special': [
          '3.375rem',
          {
            lineHeight: '4rem',
            fontWeight: '600',
          },
        ],
        '404-not-found': [
          '12.625rem',
          {
            lineHeight: '16.4rem',
            fontWeight: '600',
          },
        ],
        'not-found-title': [
          '2.3rem',
          {
            lineHeight: '2.5rem',
            fontWeight: '600',
          },
        ],
      },

      keyframes: {
        'flower-pulse': {
          '12.5%, 25%': {
            'animation-timing-function': 'ease-in',
            transform: 'scale(1)',
          },
          '18.75%': {
            'animation-timing-function': 'ease-in',
            transform: 'scale(1.32)',
          },
        },
        'menu-appear': {
          '0%': {
            opacity: '0',
            visibility: 'hidden',
            height: 0,
          },
          '100%': {
            opacity: '1',
            visibility: 'visible',
            height: 'auto',
          },
        },
        'menu-hide': {
          '0%': {
            opacity: 1,
            // visibility: "visible",
            height: 'auto',
          },

          ' 100% ': {
            opacity: 0,
            // visibility: "hidden",
            height: 0,
          },
        },
        'error-appear': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px)',
          },
        },
      },
      animation: {
        'flower-pulse': 'flower-pulse  1s linear infinite',
        'menu-appear': 'menu-appear  0.3s ease-in-out ',
        'menu-hide': 'menu-hide  0.3s ease-in-out ',
        'error-appear': 'error-appear  0.3s ease-in-out ',
      },

      boxShadow: {
        cookies: '0px 0px 40px rgba(69, 69, 69, 0.2)',
        'prevention-card': '0px 4px 15px rgba(0, 0, 0, 0.1)',
        checkbox: '0 0 0 0.1em rgba(225, 50, 110, 1)',
      },
    },
  },

  plugins: [],
};
