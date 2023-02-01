<script setup>
const colorMode = useColorMode();
</script>

<template>
  <div class="wrapper">
    <div>
      <select v-model="colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
    <span class="link"><NuxtLink to="/blog">blog</NuxtLink></span>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  grid-row: 1;
  display: flex;
  gap: $space-16;
  height: $space-40;
}

.link {
  @include heading-regular;
}
</style>
