<template>
  <div class="default_wrapper"><slot /></div>
</template>

<style lang="scss" scoped>
.default_wrapper {
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-16) 0;

  @include phone {
    padding: 0;
    align-items: stretch;
  }
}
</style>
