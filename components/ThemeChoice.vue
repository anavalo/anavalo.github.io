<template>
  <ClientOnly>
    <button class="toggle" type="button" @click="toggle" :aria-label="`Switch to ${other} mode`">
      <span class="bracket">[</span>
      <span :class="['opt', { active: colorMode.value === 'dark' }]">green</span>
      <span class="sep">/</span>
      <span :class="['opt', { active: colorMode.value === 'light' }]">amber</span>
      <span class="bracket">]</span>
    </button>
  </ClientOnly>
</template>

<script setup>
const colorMode = useColorMode();
const other = computed(() => (colorMode.value === 'dark' ? 'amber' : 'green'));
const toggle = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};
</script>

<style lang="scss" scoped>
.toggle {
  background: none;
  border: none;
  cursor: pointer;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-mute);
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 6px;
  letter-spacing: 0.02em;

  &:hover .opt:not(.active) {
    color: var(--phosphor-dim);
  }
}

.bracket,
.sep {
  color: var(--text-mute);
}

.opt {
  color: var(--text-mute);
  transition: color 120ms;

  &.active {
    color: var(--phosphor);
    text-shadow: 0 0 6px var(--phosphor-glow);
  }
}

@include phone-small {
  .toggle {
    font-size: 0.7rem;
  }
}
</style>
