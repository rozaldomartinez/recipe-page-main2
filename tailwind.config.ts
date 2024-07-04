import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        mentor:{
          nutmeg: '#854632',
          darkraspberry: '#7b284f',
          rosewhite: '#fff5fa',
          eggshell: '#f3e6d8',
          lightgrey: '#e4ded8',
          wengebrown: '#5f574e',
          darkcharcoal: '#302d2c',
        },
      },
      fontFamily:{
        heading: ['Young Serif'],
        body: ['outfit'],
      }
    },
  },
  plugins: [],
};
export default config;
