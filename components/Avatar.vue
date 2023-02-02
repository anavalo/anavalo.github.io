<template>
  <div class="img_wrapper">
    <img src="/tasos.jpeg" alt="tasos" />
  </div>
</template>

<style lang="scss" scoped>
.img_wrapper {
  width: $space-128;
  height: $space-128;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid $ui-05;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
