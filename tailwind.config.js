const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    colors: {
      navyBlue: '#1e3d58',
      royalBlue: '#057dcd',
      blueGrotto: '#43b0f1',
      ulthuanGrey: '#e8eef1'
    },
    bodrerColor: theme => ({
      'navyBlue': '#1e3d58'
    }),
    screens: {
      'desktop': '880px'
    }
  },
  variants: {},
  plugins: [],
  purge: ["./src/**/*.js", ],
}
