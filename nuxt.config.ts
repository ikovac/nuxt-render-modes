// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    spa: { ssr: false },
    ssg: { static: true },
    swr: { swr: 60 },
  },
});
