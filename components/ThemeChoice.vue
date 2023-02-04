<template>
  <div class="icon_wrapper" @click="toggle">
    <ClientOnly>
      <div v-if="colorMode.value === 'light'"><IconsMoon /></div>
      <div v-else-if="colorMode.value === 'dark'"><IconsSun /></div>
    </ClientOnly>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
const toggle = () => {
  colorMode.value === 'dark'
    ? (colorMode.preference = 'light')
    : (colorMode.preference = 'dark');
};
</script>

<style lang="scss" scoped>
.icon_wrapper {
  position: absolute;
  top: var(--space-16);
  right: var(--space-16);
  cursor: pointer;
}
</style>
