import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: ['@pinia/nuxt'],
    app: {
        head: {
            meta: [
                {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1.0'},
            ],
            title: 'Miridam'
        }
    },
    css: [
        '@/assets/css/main.css',
    ],
    publicRuntimeConfig: {
        API_URL: process.env.API_URL,
    }
})
