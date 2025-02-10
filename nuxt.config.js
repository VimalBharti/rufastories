// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/supabase',
    '@nuxthub/core',
    '@nuxt/image'
  ],
  supabase: {
    redirect: false,
  },
  ssr: false,
  css: [
    '@/assets/css/main.css',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  hub: {

  }
})