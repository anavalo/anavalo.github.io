<template>
  <div class="terminal">
    <header class="titlebar">
      <span class="dots" aria-hidden="true">
        <span class="dot dot--r"></span>
        <span class="dot dot--y"></span>
        <span class="dot dot--g"></span>
      </span>
      <span class="path">tasos@tsournos:~</span>
      <ThemeChoice />
    </header>
    <div class="screen">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.terminal {
  width: min(960px, calc(100vw - var(--space-32)));
  max-height: calc(100dvh - var(--space-32));
  background: var(--bg-frame);
  border: 1px solid var(--phosphor-dim);
  border-radius: 6px;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.4) inset,
    0 30px 80px -20px rgba(0, 0, 0, 0.7),
    0 0 60px -10px var(--phosphor-glow);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;

  @include phone {
    width: 100%;
    max-height: 100dvh;
    border-radius: 0;
    border-left: none;
    border-right: none;
  }
}

.titlebar {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: var(--space-12);
  padding: var(--space-12) var(--space-16);
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.03),
    transparent
  );
  border-bottom: 1px solid var(--phosphor-dim);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-mute);
  letter-spacing: 0.02em;
}

.dots {
  display: inline-flex;
  gap: 6px;
}

.dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--phosphor-dim);
  opacity: 0.8;
  &--r { background: #ff5f57; opacity: 0.85; }
  &--y { background: #febc2e; opacity: 0.85; }
  &--g { background: #28c840; opacity: 0.85; }
}

.path {
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @include phone-small {
    display: none;
  }
}

.screen {
  flex: 1;
  overflow-y: auto;
  padding: var(--space-32) var(--space-44);
  position: relative;

  @include tablet {
    padding: var(--space-24) var(--space-32);
  }

  @include phone {
    padding: var(--space-20) var(--space-20);
  }

  @include phone-small {
    padding: var(--space-16) var(--space-16);
  }
}
</style>
