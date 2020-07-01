import { sync } from 'vuex-router-sync'
import Vue from 'vue'
import App from './App.vue'
import createRouter from './router'
import createStore from './store'
// import { Sticky } from 'vant';
// import patpatUi from 'patpat-ui'

Vue.config.productionTip = false

// Vue.use(patpatUi)
// Vue.use(Sticky)

export const createApp = (context) => {
  // create router and store instances
  const router = createRouter()
  const store = createStore()

  // sync so that route state is available as part of the store
  sync(store, router)

  const app = new Vue({
    data: { url: context ? context.url : '' },
    router,
    store,
    render: (h) => h(App),
  })

  return { app, router, store }
}
