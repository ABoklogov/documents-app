// import { ToastSeverity } from 'primevue/api';
import { app } from '@/main';

const lifeTime = 3000;

// export function info(title: string = 'I am title', body: string = 'I am body'): void {
//   app.config.globalProperties.$toast.add({ severity: ToastSeverity.INFO, summary: title, detail: body, life: lifeTime });
// };

export function error(title: string = 'I am title', body: string = 'I am body'): void {
  app.config.globalProperties.$toast.add({
    severity: 'error',
    summary: title,
    detail: body,
    life: lifeTime
  });
}