<template>
  <div
    class="img_wrapper"
    :class="[{ light: colorMode.preference === 'light' }]"
  >
    <img src="/tasos.jpeg" alt="tasos" />
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
</script>

<style lang="scss" scoped>
.img_wrapper {
  width: $space-128;
  height: $space-128;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid $ui-05;

  &.light {
    border: 2px solid $ui-01;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
