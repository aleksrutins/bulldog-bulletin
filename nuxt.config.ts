// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: true,

        timeline: {
            enabled: true,
        },
    },
    css: ["~/assets/css/main.css"],
    typescript: {
        tsConfig: {
            compilerOptions: {
                allowJs: true,
            },
        },
    },
    routeRules: {
        "*": { experimentalNoScripts: true },
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
