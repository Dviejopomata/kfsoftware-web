const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: false,
    purgeLayersByDefault: false,
  },
  purge: [
    "./components/**/*.jsx",
    "./pages/**/*.jsx",
    "./components/**/*.js",
    "./pages/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
