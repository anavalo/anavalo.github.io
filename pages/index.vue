<template>
  <Card>
    <div class="inner_card_wrapper">
      <div class="left">
        <Avatar />
        <span
          class="title"
          :class="[{ light: colorMode.preference === 'light' }]"
          >Hello! 👋 this is Tasos.</span
        >
        <span
          class="subtitle"
          :class="[{ light: colorMode.preference === 'light' }]"
          >I code, read, write and sometimes run.</span
        >
      </div>
      <div class="right"></div>
    </div>
  </Card>
</template>

<script setup>
const colorMode = useColorMode();
</script>

<style lang="scss">
.inner_card_wrapper {
  display: flex;
  padding: $space-64;
  height: 100%;

  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: $space-16;

    .title {
      @include heading-large;

      color: $text-04;

      &.light {
        color: $text-01;
      }
    }

    .subtitle {
      @include heading-regular;

      color: $text-04;

      &.light {
        color: $text-01;
      }
    }
  }

  .right {
    flex: 1;
  }
}
</style>
