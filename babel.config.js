module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    // ["import", {
    //   "libraryName": "vant",
    //   // "libraryDirectory": "es",
    //   "style": true
    // }, 'vant'],
    ['import', {
      libraryName: 'vant',
      style: (name) => {
        return `${name}/style/less.js`
      },
    },'vant',],
    ["import", {
      "libraryName": "ant-design-vue",
      "style": true
    }, 'ant-design-vue'],
    
  ]
}
