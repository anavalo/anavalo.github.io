<template>
  <div class="avatar" aria-hidden="true">
    <span class="corner corner--tl">┌</span>
    <span class="corner corner--tr">┐</span>
    <span class="corner corner--bl">└</span>
    <span class="corner corner--br">┘</span>
    <div class="phosphor-frame">
      <img src="/tasos.webp" alt="Tasos Tsournos" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.avatar {
  position: relative;
  width: 7rem;
  height: 7rem;
  flex-shrink: 0;

  @include phone {
    width: 5.5rem;
    height: 5.5rem;
  }
}

.corner {
  position: absolute;
  font-family: var(--font-mono);
  color: var(--phosphor);
  font-size: 1.2rem;
  line-height: 1;
  text-shadow: 0 0 6px var(--phosphor-glow);

  &--tl { top: -2px; left: -6px; }
  &--tr { top: -2px; right: -6px; }
  &--bl { bottom: -2px; left: -6px; }
  &--br { bottom: -2px; right: -6px; }
}

.phosphor-frame {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: var(--bg);
  position: relative;
  border: 1px solid var(--phosphor-dim);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0,
      transparent 2px,
      rgba(0, 0, 0, 0.4) 2px,
      rgba(0, 0, 0, 0.4) 3px
    );
    pointer-events: none;
    mix-blend-mode: multiply;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(1) contrast(1.1) brightness(0.85);
    mix-blend-mode: screen;
    opacity: 0.9;
  }
}

:root.light-mode .phosphor-frame img {
  filter: grayscale(1) contrast(1.05) brightness(0.8) sepia(0.6);
}
</style>
