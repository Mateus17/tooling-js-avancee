module.exports = {
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error"
  },
  extends: ["airbnb-base", "prettier"],
  parser: "babel-eslint",
  env: { browser: true }
};
