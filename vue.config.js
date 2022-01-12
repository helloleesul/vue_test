module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: 'http://localhost:8100',
    overlay: false
  },
  outputDir: 'D:/buildTest'
}
