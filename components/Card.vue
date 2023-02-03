<template>
  <div
    class="card_wrapper"
    :class="[
      { dark: colorMode.value === 'dark' },
      // { light: colorMode.value === 'light' },
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
const colorMode = useColorMode();
</script>

<style lang="scss" scoped>
.card_wrapper {
  background: $ui-03;
  border-radius: $space-32;
  margin: $space-64;
  width: calc(100% - #{$space-128});
  height: calc(100% - #{$space-128});
  max-width: 1000px;
  background: $ui-04;

  &.dark {
    background: $ui-03;
  }

  // &.light {
  //   background: $ui-04;
  // }
}
</style>
