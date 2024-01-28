// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {
        exposeConfig: true,
        viewer: true,
        // and more...
      },
      autoprefixer: {},
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@vueuse/nuxt",
    "nuxt-headlessui",
    "@nuxtjs/color-mode",
  ],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },
  headlessui:{prefix:"H"},
  app:{
    head:{
      title:"analytics",
      link:[
        {rel:"icon", type:"image/svg+xml",href:"/public/icon.svg"},
        {rel: "stylesheet",href:"https://rsms.me/inter/inter.css"},
        {rel: "preconnect",href:"https://rsms.me/"}
      ]
    }
  },
  
  
})
