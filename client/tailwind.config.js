/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1a4d2e',
                    dark: '#0f2d1a',
                    light: '#2d6b42',
                },
                accent: {
                    DEFAULT: '#86c649',
                    dark: '#6ba33a',
                    light: '#a4db6d',
                },
                mint: {
                    DEFAULT: '#f0f7f4',
                    dark: '#e0efe8',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
