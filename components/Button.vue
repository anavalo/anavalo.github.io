<template>
  <button class="button_wrapper">
    <NuxtLink :to="to" target="_blank" class="link"
      ><slot />{{ text }}</NuxtLink
    >
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
  height: var(--space-60);
  width: 100%;
  background: var(--button-color);
  cursor: pointer;
  border: 1px solid var(--text-color);
  border-radius: var(--space-8);
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
  @include tablet {
    height: var(--space-48);
  }

  @include phone {
    height: var(--space-36);
  }
  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    gap: var(--space-8);
  }
}
</style>
