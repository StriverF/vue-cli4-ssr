module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ["import", {
      "libraryName": "vant",
      // "libraryDirectory": "es",
      "style": true
    }]
    // [
    //   'import',
    //   {
    //     libraryName: 'vant',
    //     style: (name) => {
    //       return `${name}/index.css`
    //     },
    //   },
    //   'vant',
    // ],
  ]
}
