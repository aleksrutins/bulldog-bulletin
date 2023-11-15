// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-directus"],
  runtimeConfig: {
    directus: {
      url: "https://bulldog-bulletin-production.up.railway.app"
    }
  }
})