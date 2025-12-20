
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                lloyds: {
                    green: '#006A4D',
                    dark: '#00471C',
                    light: '#E6F0EA'
                }
            }
        },
    },
    plugins: [],
}
