/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff5700",
        secondary: "white",
        theam: "#161616",
        // primary: "#FF5733",
        // secondary: "#33C1FF",
        tertiary: "#9CFF33",
      },
    },
  },
  plugins: [],
};
