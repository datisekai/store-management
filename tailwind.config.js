module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "var(--primary-color)",
        "blue-color": "var(--blue-color)",
        "gray-color": "var(--text-color)",
        "input-color": "var(--input-color)",
      },
    },
  },
  plugins: [],
};
