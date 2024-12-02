import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      minHeight: {
        'screen-minus-56': 'calc(100vh - 56px)',
      },
      backgroundImage: {
        "rays":
          "url('/rays.svg')",
      }
    }
  },
  presets: [
    require('./src/components/ui/CirclesGradientBackground/config'),
    require('./src/components/ui/SpotlightLeft/config'),
    require('./src/components/ui/SpotlightRight/config'),
    require('./src/components/layout/Background/config'),
    require('./src/components/ui/DotBackground/config')
  ]
};
export default config;
