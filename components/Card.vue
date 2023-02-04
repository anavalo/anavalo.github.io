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
  max-width: 1000px;
  position: relative;

  @include tablet {
    width: calc(100% - var(--space-128));
    height: calc(100% - var(--space-128));
  }

  @include phone {
    width: calc(100% - var(--space-64));
    height: calc(100% - var(--space-64));
  }
}
</style>
