/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: ['./*.html', './assets/js/*.js'],
  theme: {
    extend: {
      colors: {
        darkBg: '#0F172A',
        dark: '#1E293B',
        lightBg: '#F1F5F9',
        primary: '#00af87',
        glass: 'rgba(255,255,255,0.15)',
      },
    },
  },
  plugins: [],
};
