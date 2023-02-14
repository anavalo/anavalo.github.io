<template>
  <button class="button_wrapper">
    <NuxtLink :to="to" target="_blank" class="link"
      >{{ text }}<slot
    /></NuxtLink>
  </button>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss">
.button_wrapper {
  @include body-regular;

  height: var(--space-84);
  border-radius: var(--space-84);
  width: 100%;
  background: var(--button-color);
  cursor: pointer;
  border: none;
  will-change: transform;
  transition: transform 600ms;

  a {
    color: var(--button-text);
    text-decoration: none;
  }

  &:hover {
    transition: transform 125ms;
    transform: scale(1.02);
  }

  @include desktop {
    height: var(--space-80);
    border-radius: var(--space-80);
  }

  @include tablet {
    height: var(--space-72);
    border-radius: var(--space-72);
  }

  @include phone {
    height: var(--space-64);
  }

  @include phone-small {
    height: var(--space-52);
  }

  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    gap: var(--space-16);
  }
}
</style>
