/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens:{
        sm:`450px`
      },
      colors:{
        txtCol: `#212121`,
        navTxtCol: `#737373`,
        subTxtCol:`#494949`,
        btnBg : `#ABEF5F`,
        bgColor : `#e2e8f0`,
        card1 : `#E7C1D3`,
        card2 : `#EFDA6E`,
        card3 : `#A4DAC3`,
        card4 : `#77AAEA`,
      },
      fontFamily:{
        font: ["Manrope", `sans-serif`]
      }
    },
  },
  plugins: [],
}

