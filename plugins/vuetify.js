import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { mdi } from 'vuetify/lib/iconsets/mdi'

import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      sets: {
        mdi
      }
    }
  })
  nuxtApp.vueApp.use(vuetify)
})
