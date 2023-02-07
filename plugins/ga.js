import { defineNuxtPlugin } from '#app';
import VueGtag, { trackRouter } from 'vue-gtag';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: { id: 'G-FRJFJ0K0N9' },
  });
  trackRouter(useRouter());
});
