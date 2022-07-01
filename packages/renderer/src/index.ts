import {createApp} from 'vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import App from '/@/App.vue'
import { router } from '/@/router'
import './index.css'

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')

