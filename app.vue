<template>
  <NuxtLayout> <NuxtPage /> </NuxtLayout>
</template>

<script setup lang="ts">
useServerSeoMeta({
  title: 'Tasos Tsournos | Software Engineer',
  ogUrl: 'https://tsournos.com',
  ogTitle: 'Tasos Tsournos | Software Engineer',
  author: 'Tasos Tsournos',
  description: 'Tasos codes, writes and sometimes runs',
  ogDescription: 'Tasos codes, writes and sometimes runs',
  viewport: { maximumScale: 1, minimumScale: 1, width: 'device-width' },
});

useHead({
  script: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-FRJFJ0K0N9',
      async: true,
    },
    {
      innerHTML: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-FRJFJ0K0N9');
      `,
      type: 'text/javascript',
    },
  ],
});
</script>
