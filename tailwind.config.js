/** @type {import('tailwindcss').Config} */
export default {
    content: [
        // This is the most important line. It tells Tailwind to look at all your Svelte files.
        './src/**/*.{html,js,svelte,ts}',
        // This is for Flowbite, if you are still using it.
        './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Cormorant Garamond', 'serif'],
            },
        },
    },

    plugins: [
        require('flowbite/plugin'),
        require('@tailwindcss/typography'),
        // Note: Some older setups might have '@tailwindcss/postcss' here.
        // It's generally not needed here if it's in your postcss.config.cjs
    ],
};