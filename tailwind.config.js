/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  daisyui : {
    theme : ["light"]
  }
  ,
  plugins: [
    require('daisyui')
  ]
};