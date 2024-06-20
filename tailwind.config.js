/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'gray-super-light':'#ddd' ,
        'blue': '#1fb6ff',
        'blue-footer':'#1b2a4e',
        'dark-blue-1':'#121158',
        'dark-blue-2':'#171133',
        'purple-blue': '#3639ae',
        'purple': '#7e5bef',
        'dark-purple':'#2e1065',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      fontFamily: {
        fontAwesome: ["fontAwesome", "sans-serif"],
        halflings: ["halflings", "sans-serif"],
        lanenarLane: ["lanenarLane", "sans-serif"],
        themify: ["themify", "sans-serif"],
      },
      fontSize:{
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      }
    },
  },
  plugins: [],
};
