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
        'right-ray-size': '1600% 1600%',
      },
      keyframes: {
        'right-rays': {
          '0%': { backgroundPosition: "25% 85%" },
          '100%': { backgroundPosition: "85% 15%"},
        }
      },
      animation: {
        'right-rays': "right-rays 120s ease-out 0s infinite alternate"
      }
    },
  },
};
export default config;
