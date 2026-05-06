<template>
  <NuxtLink :to="to" target="_blank" rel="noopener" class="row">
    <span class="bullet" aria-hidden="true">▸</span>
    <span class="label">{{ text }}</span>
    <span class="dots" aria-hidden="true"></span>
    <span class="handle">{{ handle }}</span>
    <span class="arrow" aria-hidden="true">↗</span>
  </NuxtLink>
</template>

<script setup>
defineProps({
  to: { type: String, required: true },
  text: { type: String, required: true },
  handle: { type: String, default: '' },
});
</script>

<style lang="scss" scoped>
.row {
  display: grid;
  grid-template-columns: auto auto 1fr auto auto;
  align-items: baseline;
  gap: var(--space-12);
  padding: var(--space-16) var(--space-12);
  min-height: 48px;
  font-family: var(--font-mono);
  font-size: 1rem;
  color: var(--phosphor);
  border-top: 1px dashed var(--phosphor-dim);
  cursor: pointer;
  transition: background-color 120ms, color 120ms, padding-left 180ms;

  &:last-child {
    border-bottom: 1px dashed var(--phosphor-dim);
  }

  &:hover,
  &:focus-visible {
    background: var(--phosphor);
    color: var(--bg);
    padding-left: var(--space-20);
    outline: none;

    .handle,
    .dots,
    .bullet,
    .arrow {
      color: var(--bg);
    }
  }

  @include phone {
    font-size: 0.92rem;
    padding: var(--space-12) var(--space-8);
    gap: var(--space-8);
  }
}

.bullet {
  color: var(--phosphor);
  font-weight: 700;
}

.label {
  font-weight: 500;
  letter-spacing: 0.02em;
}

.dots {
  border-bottom: 1px dotted var(--phosphor-dim);
  height: 1px;
  align-self: center;
  min-width: 1rem;
}

.handle {
  color: var(--text-mute);
  font-size: 0.85rem;

  @include phone-small {
    display: none;
  }
}

.arrow {
  color: var(--phosphor-dim);
  font-size: 0.95rem;
}
</style>
