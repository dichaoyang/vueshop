module.exports = {
  presets: ["@vue/app"],
  //按需引入
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk"
      }
    ]
  ]
};
