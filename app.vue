<template>
  <NuxtLayout> <NuxtPage /> </NuxtLayout>
</template>

<script setup lang="ts">
useServerSeoMeta({
  title: 'Tasos Tsournos',
  ogUrl: 'https://tsournos.com',
  ogTitle: 'Tasos Tsournos',
  author: 'Tasos Tsournos',
  description: 'Tasos codes, writes and sometimes runs',
  ogDescription: 'Tasos codes, writes and sometimes runs',
  viewport: { maximumScale: 1, minimumScale: 1, width: 'device-width' },
});
</script>
