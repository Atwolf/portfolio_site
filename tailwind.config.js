/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#e7e7e7",
        secondary: "#402f25",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "light-blue": "#01a6c9",
        "dark-blue": "#02587F",
        "slate-grey": "#b3c0c6",
        "coffee": "#6B4F3E",
        'platinum': {
    DEFAULT: '#e7e7e7',
    100: '#2e2e2e',
    200: '#5d5d5d',
    300: '#8b8b8b',
    400: '#bababa',
    500: '#e7e7e7',
    600: '#ededed',
    700: '#f1f1f1',
    800: '#f6f6f6',
    900: '#fafafa'
}, 'pacific_cyan': {
    DEFAULT: '#01a6c9',
    100: '#002129',
    200: '#004251',
    300: '#01647a',
    400: '#0185a2',
    500: '#01a6c9',
    600: '#0bd1fe',
    700: '#48ddfe',
    800: '#85e8fe',
    900: '#c2f4ff'
}, 'lapis_lazuli': {
    DEFAULT: '#02587f',
    100: '#001119',
    200: '#012332',
    300: '#01344b',
    400: '#024564',
    500: '#02587f',
    600: '#038ac9',
    700: '#1db5fc',
    800: '#68cefd',
    900: '#b4e6fe'
}, 'prussian_blue': {
    DEFAULT: '#06354c',
    100: '#010a0f',
    200: '#02151e',
    300: '#041f2d',
    400: '#052a3c',
    500: '#06354c',
    600: '#0d6b9b',
    700: '#13a2ea',
    800: '#60c2f2',
    900: '#b0e0f9'
}, 'rich_black': {
    DEFAULT: '#091219',
    100: '#020405',
    200: '#04080a',
    300: '#060b10',
    400: '#080f15',
    500: '#091219',
    600: '#234560',
    700: '#3c78a6',
    800: '#74a6cd',
    900: '#b9d3e6'
}, 'coffee': {
    DEFAULT: '#6b4f3e',
    100: '#15100c',
    200: '#2b2019',
    300: '#402f25',
    400: '#553f31',
    500: '#6b4f3e',
    600: '#966f56',
    700: '#b4927d',
    800: '#cdb6a8',
    900: '#e6dbd4'
}
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/lambo_full.png')",
      },
    },
  },
  plugins: [],
};
