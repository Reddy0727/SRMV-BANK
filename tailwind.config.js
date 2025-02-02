/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        white:'#fff',
        primary:'#00040f',
        secondary:'#00f6ff',
        dimWhite:'rgba(255, 255, 255, 0.7)',
        dimBlue:'rgba(9, 151, 124, 0.1)'
      },
      fontFamily:{
        poppins:["Poppins","sans-serif"]
      }
    },
    screens:{
      xs:'480px',
      ss:'620px',
      sm:'678px',
      md:'1060px',
      lg:'1200px',
      xl:'1700px'
    },
    gridTemplateColumns:{
      'footer': 'repeat(auto-fit, minmax(0, 1fr))'
    }
  },
  plugins: [],
}