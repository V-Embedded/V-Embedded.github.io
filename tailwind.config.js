/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#222831',
        secondary: '#393E46',
        success: '#FFD369',
        info: '#EEEEEE',
        accent: '#22D3EE',
        violet: '#8B5CF6',
      },
      boxShadow: {
        soft: '0 10px 40px rgba(34, 40, 49, 0.12)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
