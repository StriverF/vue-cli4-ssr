const cilentConfig = require('./vue.config.cilent');
const serverConfig = require('./vue.config.server');
const lessToJs = require('less-vars-to-js')
const fs = require('fs')
const paletteLess = fs.readFileSync('./src/styles/variables.less', 'utf8')
const globalVars = lessToJs(paletteLess, { resolveVariables: true, stripPrefix: true })

// const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  outputDir: 'server/public',
  configureWebpack: process.env.TARGET_ENV === 'server' ? serverConfig : cilentConfig,
  chainWebpack: config => {
    // if (process.env.TARGET_ENV === 'server') {
    //   config.module.rule('css')
    // .test(/\.css$/)
    // .use('vue-style-loader')
    //   .loader('vue-style-loader')
    //   .end()
    // .use('css-loader')
    //   .loader('css-loader')
    //   .end()
    // }
    // config.module.rule('vue').test(/\.vue$/).use('vue-loader').loader('vue-loader').options({extractCSS: isProd})
    // config.optimization.splitChunks.name('vendor').minChunks(()=> {
    //   return 
    // })
    const lessRule = config.module.rule('less')
    console.log(lessRule)
    // config.module.rule('less').test(/\.less$/).exclude(/node_modules/).use('vue-style-loader').loader('vue-style-loader').end()
    // .use('css-loader').loader('css-loader').options({modules: true, localIdentName: '[local]--[hash:base64:5]'}).end()
    // .use('less-loader').loader('less-loader').end()
    // config.module.rule('less').test(/\.less$/).include(/node_modules/).use('vue-style-loader').loader('vue-style-loader').end()
    // .use('css-loader').loader('css-loader').end()
    // .use('less-loader').loader('less-loader').options({globalVars, modules: false, javascriptEnabled: true}).end()
  },
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      // css: {
      //   modules: false
      // },
      less: {
        globalVars,
        modules: false,
        javascriptEnabled: true
      }
    }
  },
  pwa: {
    name: 'vue cli4 ssr',
    themeColor: '#ff2556',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    workboxOptions: {
      swDest: 'vue-cli4-ssr-sw.js',
      skipWaiting: true,
      clientsClaim: true,
      include: [
        /js\/main.[0-9A-Za-z]{8,8}.js$/,
        /js\/vendor.[0-9A-Za-z]{8,8}.js$/,
        /css\/main.[0-9A-Za-z]{8,8}.css$/
      ],
      cacheId: 'vue-cli4-ssr-sw-cache'
    }
  },
}
