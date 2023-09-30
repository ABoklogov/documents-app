import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Toast from 'primevue/toast'
import TastService from 'primevue/toastservice'

import 'primevue/resources/themes/saga-green/theme.css'
import 'primeicons/primeicons.css';
import 'primevue/resources/primevue.min.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(PrimeVue);
app.use(TastService);
app.component('PrimeButton', Button)
app.component('InputText', InputText)
app.component('PrimeToast', Toast)
app.mount('#app')