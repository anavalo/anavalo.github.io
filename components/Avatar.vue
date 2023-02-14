<template>
  <div class="img_wrapper">
    <img src="/tasos.jpg" alt="tasos" />
  </div>
</template>

<style lang="scss" scoped>
.img_wrapper {
  width: var(--space-128);
  height: var(--space-128);
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--avatar-color);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
