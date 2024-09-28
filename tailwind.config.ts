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
        'main-bg': '#F4EEFF'
      },
    },
  },
  plugins: [],
};
export default config;
