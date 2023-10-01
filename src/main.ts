import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Toast from 'primevue/toast'
import ProgressSpinner from 'primevue/progressspinner'
import ToastService from 'primevue/toastservice';

import 'primevue/resources/themes/saga-green/theme.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css'

const pinia = createPinia()
export const app = createApp(App)

app.use(pinia)
app.use(PrimeVue);
app.use(ToastService);
app.component('PrimeButton', Button)
app.component('InputText', InputText)
app.component('PrimeToast', Toast)
app.component('PrimeSpiner', ProgressSpinner)
app.mount('#app')