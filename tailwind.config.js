/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./casos-exito.html",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        'accent-neon': '#00E5FF',
        'bg-charcoal': '#121212',
        'text-off-white': '#f4f4f4',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
