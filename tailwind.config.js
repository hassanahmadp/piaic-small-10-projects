/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      check_background_to: 'hsl(280, 87%, 65%)',
      check_background_from: 'hsl(192, 100%, 67%)',
      light_v_gray: 'hsl(0, 0%, 98%)',
      light_v_grayish_blue: 'hsl(236, 33%, 92%)',
      light_grayish_blue: 'hsl(233, 11%, 84%)',
      light_d_grayish_blue: 'hsl(236, 9%, 61%)',
      light_vd_grayish_blue: 'hsl(235, 19%, 35%)',
      dark_v_blue: 'hsl(235, 21%, 11%)',
      dark_v_desaturate_blue: 'hsl(235, 24%, 19%)',
      dark_l_grayish_blue: 'hsl(234, 39%, 85%)',
      dark_l_grayish_blue_hover: 'hsl(236, 33%, 92%)',
      dark_grayish_blue: 'hsl(234, 11%, 52%)',
      dark_v_grayish_blue: 'hsl(233, 14%, 35%)',
      dark_vv_grayish_blue: 'hsl(237, 14%, 26%)',
      transparent: 'transparent',
    }
  },
  plugins: [],
}
