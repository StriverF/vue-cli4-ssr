const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

// const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: './src/entry-client.js',
  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  // module: {
  //   rules: [
      // {
      //   test: /\.vue$/,
      //   loader: 'vue-loader',
      //   options: {
      //     // enable CSS extraction
      //     extractCSS: isProd
      //   }
      // },
      // {
      //   test: /\.css$/,
      //   // 重要：使用 vue-style-loader 替代 style-loader
      //   use: isProd
      //     ? ExtractTextPlugin.extract({
      //         use: 'css-loader',
      //         fallback: 'vue-style-loader'
      //       })
      //     : ['vue-style-loader', 'css-loader']
      // }
  //   ]
  // },
  plugins: [
    // This plugins generates `vue-ssr-client-manifest.json` in the
    // output directory.
    new VueSSRClientPlugin(),
    // isProd ? new ExtractTextPlugin({ filename: 'common.[chunkhash].css' }) : null
  ],
}
