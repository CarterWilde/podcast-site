module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/Styles/Variables.sass";`
      }
    }
  }
};