// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-12-21",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    public: {
      staticformsApiKey: process.env.NUXT_PUBLIC_STATICFORMS_API_KEY || "YOUR_API_KEY",
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
          content: "A simple contact form using StaticForms.xyz",
        },
      ],
    },
  },
});

