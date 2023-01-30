<template>
  <div class="wrapper">
    <div>
      <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
    <span class="link">about me</span>
    <span class="link">blog</span>
    <span class="link">projects</span>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
</script>

<style lang="scss">
@import '@/assets/variables.scss';
.wrapper {
  display: flex;
  gap: $space-16;
  height: $space-40;
}

.link {
  @include heading-regular;
}
</style>
