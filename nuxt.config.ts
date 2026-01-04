// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  alias: {
    "@ui": "/app/components/ui",
    "@animated": "/app/components/animated",
    "@features": "/app/features",
    "@services": "/app/services",
    "@composables": "/app/composables",
    "@types": "/app/types",
    "@utils": "/app/utils",
  },
});
