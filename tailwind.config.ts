import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        'inherit': 'inherit'
      },
      colors: {
        'section-bg': '#DCD6F7',
        'main-bg': '#F4EEFF',
        'primary-1': '#424874',
      },
      keyframes: {
        typing: {
          from: { left: '0' },
          to: { left: '108px' }
        },
        typing2: {
          from: { left: '108px' },
          to: { left: '196px' }
        },
        blink: {
          from: { borderColor: 'transparent' },
          to: { borderColor: '#171717' }
        }
      },
      animation: {
        typing: 'typing 1.5s steps(6, end) forwards, typing2 1s steps(1, end) forwards 1.5s, blink 0.75s infinite',
      }
    },
  },
  plugins: [],
};
export default config;
