module.exports = {
    content: ["./**/*.html", "./**/*.njk", "./node_modules/flowbite/**/*.js"],
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {},
        },
    },
    variants: {},
    plugins: [require("@tailwindcss/typography"), require("flowbite/plugin")],
};
