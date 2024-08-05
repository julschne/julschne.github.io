export default defineNuxtConfig({
  extends: 'content-wind',

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2024-08-05',
  modules: ["@nuxt/image"],
  css: ["~/assets/css/scrollbar.css"],
})