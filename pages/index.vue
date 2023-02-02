<template>
  <Card>
    <div class="inner_card_wrapper">
      <div class="left">
        <Avatar />
        <span class="title">this is it</span>
      </div>
    </div>
  </Card>
</template>

<style lang="scss" scoped>
.inner_card_wrapper {
  display: flex;
  padding: $space-64;

  .left {
    display: flex;
    flex-direction: column;
    gap: $space-16;

    .title {
      @include heading-huge;

      color: $text-03;
    }
  }
}
</style>
