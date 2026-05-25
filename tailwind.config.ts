import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        academy: {
          navy: "#08152f",
          blue: "#102f66",
          violet: "#6557ff",
          ink: "#14213d",
          mist: "#f4f7fb"
        }
      },
      boxShadow: {
        soft: "0 18px 55px rgba(8, 21, 47, 0.12)",
        glow: "0 20px 70px rgba(101, 87, 255, 0.28)"
      }
    }
  },
  plugins: []
};

export default config;
