/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      spacing: {
        "96": "24rem",
        "128": "32rem"
      },
    },
    fontFamily: {
      "sans": "Montserrat"
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    borderWidth: ['responsive', 'first', 'last', 'hover', 'focus'],
    margin: ['responsive', 'first', 'last', 'even', 'odd'],
  },
  plugins: []
}
