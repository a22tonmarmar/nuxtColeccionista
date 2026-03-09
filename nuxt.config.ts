// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: {
    enabled: true,
  },
  css: ["primeicons/primeicons.css"],
  modules: ["@pinia/nuxt"],
  runtimeConfig: {
    pokemonApiUrl: "https://pokeapi.co/api/v2",
    geminiKey: "",
  },
});
