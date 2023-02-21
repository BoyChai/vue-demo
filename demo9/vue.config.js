const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/': {
        target: 'http://api.boychai.xyz', //接口域名（你请求的第三方接口）
        changeOrigin: true,               //是否跨域 （虚拟的站点需要更管origin）
        ws: false,                       //是否代理 websockets
        secure: false,                   //是否https接口
        pathRewrite: {                  //路径重置
          '^/': ''
        }
      }
    }
  }
});
