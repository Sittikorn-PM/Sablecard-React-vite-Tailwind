/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-70%)' },
        },
        scrollComments: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll1: 'scroll 30s linear infinite',
        scroll2: 'scroll 40s linear infinite',
        scrollComments: 'scrollComments 60s linear infinite',
      },
      backgroundImage: {
        'bgDownload': "url('./src/assets/Img/video.png')",
        'bgheader': "url('./src/assets/Img/bg-header.png')",
      }
      
    },
    fontFamily: {
      'sans': ['prompt', 'sans-serif']
    }
  },
  plugins: [],
}

