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
  viewport: { initialScale: 1, width: 'device-width' },
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
    {
      innerHTML: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MN8S6MC');
          `,
      type: 'text/javascript',
    },
  ],
  noscript: [
    {
      innerHTML: `
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MN8S6MC"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
      `,
    },
  ],
});
</script>
