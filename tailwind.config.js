const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern':
          "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0px, rgba(0, 0, 0, 0.5) 40%, rgba(0, 0, 0, 0.4) 90%),url('https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_30/2946851/190725-watching-tv-al-1056-2946851.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
        'hero-pattern-2':
          "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0px, rgba(0, 0, 0, 0.5) 40%, rgba(0, 0, 0, 0) 100%),url('../img/hero2.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"),]
}



