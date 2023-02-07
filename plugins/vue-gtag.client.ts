import VueGtag from 'vue-gtag';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    VueGtag,
    {
      config: {
        id: 'G-FRJFJ0K0N9',
      },
    },
    nuxtApp.$router
  );
});
