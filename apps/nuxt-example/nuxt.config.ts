// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    public: {
      // Overridden at runtime by the NUXT_PUBLIC_STATICFORMS_API_KEY environment variable
      staticformsApiKey: "YOUR_API_KEY",
    },
  },
  app: {
    head: {
      title: "StaticForms - Nuxt Example",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "A simple contact form using StaticForms.dev",
        },
      ],
    },
  },
});

