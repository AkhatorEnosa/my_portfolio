/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Only class-based dark mode
  content: [
    './index.html',
    './src/**/*.{jsx,tsx}' // Only React components
  ],
  theme: {
    extend: {}, // No extra config needed
    screens: {
      xs: '340px',
      sm: '540px',
      md: '768px',
      lg: '1024px',
    }
  }
}