/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: 'Robot Mono, monospace',
        },

        extend: {
            colors: {
                pizza: '#344444',
            },
            fontSize: {
                huge: ['10rem', { lineHeight: '2' }],
            },
            height: {
                screen: '100dvh',
            },
        },
    },
    plugins: ['prettier-plugin-tailwindcss'],
}
