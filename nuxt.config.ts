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

  modules: ["@nuxtjs/tailwindcss","nuxt-icon", "@vueuse/nuxt", "nuxt-headlessui"],
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
