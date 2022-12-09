/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'mobile': "url('./assets/images/bg-sidebar-mobile.svg')",
        'desktop': "url('./assets/images/bg-sidebar-desktop.svg')"
      },
      colors: {
        'marine-blue': 'hsl(213, 96%, 18%)',
        'purplish-blue': 'hsl(243, 100%, 62%)',
        'pastel-blue': 'hsl(228, 100%, 84%)',
        'light-blue': 'hsl(206, 94%, 87%)',
        'strawberry-red': 'hsl(354, 84%, 57%)'
      },
      screens: {
        'sm': '375px',
        'lg': '1440px'
      }
    },
  },
  plugins: [],
}
