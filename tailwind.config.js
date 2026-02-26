/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html",
    ],
    theme: {
        extend: {
            colors: {
                dark: '#05070a',
                surface: '#0a0d14',
                accent: '#22d3ee',
                slate: { 800: '#1e293b', 900: '#0f172a', 950: '#020617' }
            },
            animation: {
                'slow-pan': 'slow-pan 20s ease-in-out infinite',
                'float-soft': 'float-soft 6s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 5s ease-in-out infinite',
                'reveal-up': 'reveal-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            },
            keyframes: {
                'slow-pan': {
                    '0%, 100%': { backgroundPosition: 'left center' },
                    '50%': { backgroundPosition: 'right center' }
                },
                'float-soft': {
                    '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
                    '50%': { transform: 'translateY(-10px) rotate(1deg)' }
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: 0.1, transform: 'scale(1)' },
                    '50%': { opacity: 0.25, transform: 'scale(1.1)' }
                },
                'reveal-up': {
                    '0%': { opacity: 0, transform: 'translateY(40px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' }
                }
            }
        },
    },
    plugins: [],
}
