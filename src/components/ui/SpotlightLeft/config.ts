import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        'left-ray-size': '1600% 1600%',
      },
      keyframes: {
        'left-rays': {
          '0%': { backgroundPosition: "75% 85%" },
          '100%': { backgroundPosition: "15% 15%"},
        }
      },
      animation: {
        'left-rays': "left-rays 120s ease-out 0s infinite alternate"
      }
    },
  },
};
export default config;
