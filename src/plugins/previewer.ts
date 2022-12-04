import Previewer from 'virtual:vue-component-preview';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Previewer)
})