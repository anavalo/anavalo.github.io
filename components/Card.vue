<template>
  <div class="card_wrapper">
    <ThemeChoice />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card_wrapper {
  background: var(--secondary-color);
  border-radius: var(--space-32);
  width: calc(100% - var(--space-160));
  height: calc(100% - var(--space-160));
  max-width: 1200px;
  position: relative;

  @include tablet {
    width: 100%;
    height: 100%;
    border-radius: 0;
    max-width: unset;
  }
}
</style>
