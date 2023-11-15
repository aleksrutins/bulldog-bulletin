/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ["Abril Fatface", "display"],
                serif: ["Alike", "serif"],
                sans: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};
