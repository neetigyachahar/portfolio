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
                "zoom": "600% 600%"
            },
            keyframes: {
                'bg-gradient-change': {
                    '0%': { backgroundPosition: "var(--first-quadrant)" },
                    '25%': { backgroundPosition: "var(--second-quadrant)" },
                    '75%': { backgroundPosition: "var(--third-quadrant)" },
                    '100%': { backgroundPosition: "var(--fourth-quadrant)" },
                }
            },
            animation: {
                'bg-gradient': "bg-gradient-change 60s ease-in-out 0s infinite alternate"
            }
        },
    },
};
export default config;
