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

  modules: ['@nuxtjs/eslint-module', '@nuxtjs/i18n'],

  i18n: {
    /* module options */
    vueI18n: './plugins/i18n.js'
  }
})
