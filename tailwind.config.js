/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0a0a0f',
                primary: '#c9847a',
                secondary: '#4fd1c5',
                text: '#f5f0eb'
            },
            fontFamily: {
                heading: ['"Cormorant Garamond"', 'serif'],
                body: ['"DM Sans"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
