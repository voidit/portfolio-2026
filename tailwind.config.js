import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        // This tells Tailwind to scan all your component and page files
        './src/**/*.{html,js,svelte,ts}',
        './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...fontFamily.sans],
                serif: ['Cormorant Garamond', ...fontFamily.serif],
            },
        },
    },
    plugins: [
        require('flowbite/plugin'),
        require('@tailwindcss/postcss'),
    ],
};