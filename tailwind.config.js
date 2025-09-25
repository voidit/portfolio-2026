import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{html,js,svelte,ts}',
        './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
    ],

    theme: {
        extend: {
            // Extend the default font families
            fontFamily: {
                sans: ['Montserrat', ...fontFamily.sans],
                serif: ['Playfair Display', ...fontFamily.serif],
            },
        },
    },

    plugins: [
        require('flowbite/plugin'),
        require('@tailwindcss/postcss'),
    ],
};