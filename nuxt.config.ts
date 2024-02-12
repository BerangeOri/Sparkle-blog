// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  css: ['vuetify/styles/main.sass'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: ['@pinia/nuxt', 'vuetify-nuxt-module'],
  sourcemap: {
    server: false,
    client: false,
  },
  vuetify: {
    //설정
    moduleOptions: {
      /* module specific options */
      styles: { configFile: './assets/scss/settings.scss' },
    },
    vuetifyOptions: {
      /* vuetify options */
    },
  },
  features: {
    inlineStyles: false,
  },
})
