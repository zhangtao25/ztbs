// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// Import element-ui library
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// Import VueI18n library
import VueI18n from 'vue-i18n'

// Configuring VueI18n
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

import zhMessage from './assets/locale/zh'
import enMessage from './assets/locale/en'

// install
Vue.use(VueI18n)
Vue.use(ElementUI,{i18n: (key, value) => i18n.t(key, value)})

const messages = {
  en: {
    ...enMessage,
    ...enLocale
  },
  zh: {
    ...zhMessage,
    ...zhLocale
  }
}

// Create VueI18n instance with options
  // Init locale
const browserLang = (navigator.language || navigator.browserLanguage).toLowerCase();
let langCode = 'en';
if(browserLang.indexOf('zh') >= 0) {
  langCode = 'zh';
}

const i18n = new VueI18n({
  locale: langCode, // set locale
  messages, // set locale messages
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App },
  template: '<App/>'
})
