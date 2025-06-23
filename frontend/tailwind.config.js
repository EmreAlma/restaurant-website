/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jellyBeanBlue: "#4CAF50",
        sunset: "#1B5E20",
        lightColor: "#1B5E20",

        
        primary: '#1B5E20',
        secondary: '#4CAF50',
        accent: '#E53935',
        oil: '#F4E04D',
        darkGreen: '#1B5E20',
      },
    },
  },
  plugins: [],
};



