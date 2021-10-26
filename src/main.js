import { createApp, defineAsyncComponent  } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const App = defineAsyncComponent(() => import('./App.vue'))

import router from './router'

const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')
