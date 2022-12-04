import Preview from "vite-plugin-vue-component-preview";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src/',
    vite: {
      plugins: [Preview()],
    },
})
