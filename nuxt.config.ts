// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],

  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },

  alias: {
    "@ui": "~/components/ui",
    "@animated": "~/components/animated",
    "@features": "~/features",
    "@services": "~/services",
    "@composables": "~/composables",
    "@types": "~/types",
    "@utils": "~/utils",
  },
});
