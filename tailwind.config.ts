/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,vue,ts}", "./app.vue"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
