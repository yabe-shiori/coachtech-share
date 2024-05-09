/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.ts",
        "./resources/**/*.tsx",
    ],
    theme: {
        extend: {
            colors: {
                customPurple: "rgb(81, 24, 209)",
                customPurpleHover: "rgb(71, 14, 189)",
                customPurpleActive: "rgb(61, 4, 179)",
            },
        },
    },
    plugins: [],
};
