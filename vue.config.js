module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    host: 'localhost',
    hot: true,
    disableHostCheck: true,
    https: false
  }
  // devServer: {
  //   proxy: 'http://localhost:8081',
  //   overlay: false
  // },
  // outputDir: 'D:/buildTest'
}
