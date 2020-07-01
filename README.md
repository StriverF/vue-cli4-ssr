# vue-cli4-ssr
Vue-cli4 同构SSR项目 支持SSR开发模式热加载，支持引入第三方组件库及第三方css(本项目以Vant组件库为例)，支持PWA
![](https://cdn.patpat.site/mweb/15935816357913.jpg)

## Project setup
```
npm install
```

### SSR开发模式支持热加载，避免服务端调试重复Build
```
npm run dev:ssr
```

### SPA开发模式
```
npm run dev:spa
```

### 打包发布
```
npm run build:ssr

npm run start
```

注意部署环境配置.env文件，.env文件添加 .gitignore

### Vant 组件库按需加载主要配置
项目根目录文件babel.config.js配置如下

```
plugins: [
  ["import", {
    "libraryName": "vant",
    // "libraryDirectory": "es",
    "style": true
  }]
]
```

Vant官方文档里面配置有 "libraryDirectory": "es" 这个配置会把引入包文件目录指向es目录，es目录下的导入css用的 import 'xxx.css' 这个语法在SSR服务端会报错。
报错内容：
![](https://cdn.patpat.site/mweb/15935744382041.jpg)
把"libraryDirectory": "es",注释掉，libraryDirectory默认值会是lib目录。lib目录导入css用的是 `require('../../style/base.css');` 这样在node服务端就不会报错了。

### env配置
```
;端口
PORT=3000
;协议（主要为了本地https安全环境调试，服务器部署建议配http, https交给运维从Nginx配置）
PROTOCOL=http
;node服务错误日志等级 'info' | 'warn' | 'error' | 'trace' | 'debug' | 'silent'
LOG_LEVEL=silent
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
