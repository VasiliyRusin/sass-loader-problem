module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/scss/_module.scss";
        `
      }
    }
  }
}
