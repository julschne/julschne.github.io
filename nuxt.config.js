// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  css: ['vuetify/lib/styles/main.sass'],

  build: {
    transpile: ['vuetify']
  },

  vite: {
    base: '/'
  },

  modules: ['@nuxtjs/eslint-module', '@nuxtjs/google-fonts'],

  googleFonts: {
    // Options
    families: {
      Roboto: [100, 300, 400, 500, 700, 900]
    }
  }
})
