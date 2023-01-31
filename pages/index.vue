<template>
  <div class="intro_wrapper">
    <div class="boom">HELLO</div>
    <div class="img"><img src="/tasos.jpeg" width="90" /></div>
    <div class="title">This is Tasos, and I like to code.</div>
  </div>
</template>

<style lang="scss" scoped>
.intro_wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $space-16;
}
.boom {
  @include heading-huge-italic;
  color: $text-03;
}
.img {
  width: $space-80;
  height: $space-80;
  border-radius: 50%;
  border: 2px solid $ui-01;
  overflow: hidden;
}

.title {
  @include heading-regular;
  color: $text-03;
}
</style>
