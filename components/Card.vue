<template>
  <div :class="[`card_wrapper ${colorMode.value}`]">
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

  &.dark {
    background: $ui-03;
  }

  &.light {
    background: $ui-04;
  }
}
</style>
