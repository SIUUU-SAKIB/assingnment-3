/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      height:{
//         sm (640px)	max-width: 640px;
// md (768px)	max-width: 768px;
// lg (1024px)	max-width: 1024px;
// xl (1280px)	max-width: 1280px;
// 2xl (1536px)	max-width: 1536px;
      },
      screens:{
        sm:`450px`
      },
      colors:{
        txtCol: `#212121`,
        navTxtCol: `#737373`,
        subTxtCol:`#494949`,
        btnBg : `#ABEF5F`,
        bgColor : `#e2e8f061`,
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

