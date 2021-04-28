module.exports = {
  lintOnSave: false,
  configureWebpack: {
    entry: ["babel-polyfill", "./src/main.js"],
  },
  // 개발 서버 설정
  devServer: {
    // 프록시 설정
    proxy: {
      // 프록시 요청을 보낼 api의 시작 부분
      // '/api': {
      //   // 프록시 요청을 보낼 서버의 주소
      //   target: 'http://localhost:3000'
      // },
      '/psearch': {
        target: 'http://localhost:4000/psearch',
        changeOrigin: true,
        pathRewrite: {
          '^/psearch': ''
        }
      },
      '/pupdate': {
        target: 'http://localhost:4000/pupdate',
        changeOrigin: true,
        pathRewrite: {
          '^/pupdate': ''
        }
      }
    }
  },
}