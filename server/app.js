const express = require('express')
const fs = require('fs')
const path = require('path')
const resolve = file => path.resolve(__dirname, file)
const { createBundleRenderer } = require('vue-server-renderer')
const templatePath = resolve('../src/template/index.template.html')
const template = fs.readFileSync(templatePath, 'utf-8')

const app = express()
const protocol = process.env.PROTOCOL || 'http'
const port = process.env.PORT || 8680;
const isDev = process.env.NODE_ENV === 'development'

const createRenderer = (bundle, options) => {
  return createBundleRenderer(bundle, Object.assign(options, {
    runInNewContext: false
  }))
}

let renderer
let readyPromise
if (isDev) {
  const setupDev = require('./setup-dev')
  readyPromise = setupDev(app, templatePath, (bundle, options) => {
    renderer = createRenderer(bundle, options)
  })
} else {
  const serverBundle = require('./public/vue-ssr-server-bundle.json')
  const clientManifest = require('./public/vue-ssr-client-manifest.json')
  renderer = createRenderer(serverBundle, { template, clientManifest })
}

app.use(express.static('server/public'))

const render = (req, res) => {
  const s = Date.now()

  res.setHeader("Content-Type", "text/html")
  // res.setHeader("Server", serverInfo)

  const handleError = err => {
    if (err.url) {
      res.redirect(err.url)
    } else if(err.code === 404) {
      res.status(404).send('404 | Page Not Found')
    } else {
      // Render Error Page or Redirect
      res.status(500).send('500 | Internal Server Error')
      console.error(`error during render : ${req.url}`)
      console.error(err.stack)
    }
  }

  const context = {
    title: 'Vue CLI4 SSR', // default title
    url: req.url
  }
  renderer.renderToString(context, (err, html) => {
    if (err) {
      return handleError(err)
    }
    res.send(html)
    if (isDev) {
      console.log(`whole request: ${Date.now() - s}ms`)
    }
  })
}
const renderDev = (req, res) => {
  readyPromise.then(() => render(req, res))
}

app.get('*', isDev ? renderDev : render)



if (protocol === 'https') {
  let privateKey = fs.readFileSync('./server/cert/dev.com+6-key.pem', 'utf8')
  let certificate = fs.readFileSync('./server/cert/dev.com+6.pem', 'utf8')
  let credentials = { key: privateKey, cert: certificate }
  require(protocol).createServer(credentials, app).listen(port, () => console.log(`\n\n\x1b[42;30m 服务启动成功： \x1b[40;32m ${protocol}://localhost:${port}\x1b[0m\n`))
} else {
  app.listen(port, () => console.log(`\n\n\x1b[42;30m 服务启动成功： \x1b[40;32m ${protocol}://localhost:${port}\x1b[0m\n`))
}
