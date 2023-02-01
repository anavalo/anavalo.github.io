<template>
  <div :class="[cssArray]">
    <slot />
  </div>
</template>

<script setup>
const colorMode = useColorMode();
const cssArray = computed(() => {
  return colorMode.value === 'dark'
    ? 'card_wrapper dark'
    : 'card_wrapper light';
});
</script>

<style lang="scss" scoped>
.card_wrapper {
  background: $ui-03;
  border-radius: $space-32;
  margin: $space-64;
  width: calc(100% - #{$space-128});
  height: calc(100% - #{$space-128});

  &.dark {
    background: $ui-03;
  }

  &.light {
    background: $ui-04;
  }
}
</style>
