/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'gray-super-light':'#ddd',
        'blue-footer':'#1b2a4e',
        'dark-blue-1':'#121158',
        'dark-blue-2':'#171133',
        'purple-blue': '#3639ae',
        'purple': '#7e5bef',
        'dark-purple':'#2e1065',
        'pink': '#ff49db',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'red': '#ff0000',
        'redark': '#b70202',
        'defult': '#3639AE',
        'orange': '#ff6a07',
        'green': '#82c519',
        'blue': '#2c6dff'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
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
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite forwards',
      }
    },
  },
  plugins: [],
};
