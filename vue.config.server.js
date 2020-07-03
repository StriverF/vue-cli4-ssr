const nodeExternals = require('webpack-node-externals')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

// const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: './src/entry-server.js',
  target: 'node',
  devtool: 'source-map',
  output: {
    libraryTarget: 'commonjs2',
  },
  externals: nodeExternals({
    whitelist: [/\.css$/, /vant\/lib/, /ant-design-vue\/lib/],
  }),
  optimization: {
    splitChunks: false,
  },
  module: {
    rules: [
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
    ]
  },
  // This is the plugin that turns the entire output of the server build
  // into a single JSON file. The default file name will be
  // `vue-ssr-server-bundle.json`
  plugins: [
    new VueSSRServerPlugin(),
  ],
}
