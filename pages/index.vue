<template>
  <Card>
    <div :class="['terminal-doc', { booted: booted }]">
      <section class="hero">
        <p class="line line--1"><span class="prompt">$</span> whoami</p>
        <h1 class="line line--2 name">tasos tsournos</h1>
      </section>

      <section class="meta">
        <Avatar class="meta__avatar line line--3" />
        <dl class="meta__list line line--4">
          <div class="meta__row">
            <dt>[role]</dt>
            <dd>software & infrastructure engineer</dd>
          </div>
          <div class="meta__row">
            <dt>[bio]</dt>
            <dd>codes, writes, sometimes runs</dd>
          </div>
          <div class="meta__row">
            <dt>[stack]</dt>
            <dd>k8s · node · react</dd>
          </div>
          <div class="meta__row">
            <dt>[status]</dt>
            <dd><span class="status-dot">●</span> online</dd>
          </div>
        </dl>
      </section>

      <section class="about line line--5">
        <p class="prompt-line"><span class="prompt">&gt;</span> cat about.txt</p>
        <p class="about__body">keeps prod boring.</p>
      </section>

      <section class="links line line--6">
        <p class="prompt-line"><span class="prompt">&gt;</span> ls links/</p>
        <nav class="links__nav">
          <Button
            to="https://github.com/anavalo"
            text="github"
            handle="anavalo"
          />
          <Button
            to="https://www.linkedin.com/in/anastasios-tsournos/"
            text="linkedin"
            handle="anastasios-tsournos"
          />
          <Button to="https://dev.to/anavalo" text="blog" handle="dev.to/anavalo" />
          <Button to="/tokenophobia" text="tokenophobia" handle="noun, coined 2026" />
        </nav>
      </section>

      <p class="cli line line--7">
        <span class="prompt">$</span><span class="cursor">█</span>
      </p>
    </div>
  </Card>
</template>

<script setup>
useSeoMeta({
  title: 'Tasos Tsournos',
  description:
    'Software & infrastructure engineer. Keeps prod boring. k8s · node · react.',
  ogTitle: 'Tasos Tsournos',
  ogDescription:
    'Software & infrastructure engineer. Keeps prod boring.',
  ogUrl: 'https://www.tsournos.com/',
  ogType: 'website',
  twitterCard: 'summary',
  twitterTitle: 'Tasos Tsournos',
  twitterDescription:
    'Software & infrastructure engineer. Keeps prod boring.',
});

useHead({
  link: [{ rel: 'canonical', href: 'https://www.tsournos.com/' }],
});

const booted = ref(false);

onMounted(() => {
  // play boot sequence once per session; instant on subsequent visits
  if (typeof window !== 'undefined') {
    if (sessionStorage.getItem('booted') === '1') {
      booted.value = true;
    } else {
      requestAnimationFrame(() => {
        booted.value = true;
        sessionStorage.setItem('booted', '1');
      });
    }
  }
});
</script>

<style lang="scss" scoped>
.terminal-doc {
  font-family: var(--font-mono);
  color: var(--phosphor);
  display: flex;
  flex-direction: column;
  gap: var(--space-32);

  @include phone {
    gap: var(--space-24);
  }
}

.prompt {
  color: var(--phosphor-dim);
  margin-right: var(--space-8);
  user-select: none;
}

.line {
  opacity: 0;
  transform: translateY(4px);
}

.booted .line {
  animation: line-in 280ms ease-out forwards;
}

.booted .line--1 { animation-delay: 0ms; }
.booted .line--2 { animation-delay: 220ms; }
.booted .line--3 { animation-delay: 480ms; }
.booted .line--4 { animation-delay: 600ms; }
.booted .line--5 { animation-delay: 840ms; }
.booted .line--6 { animation-delay: 1040ms; }
.booted .line--7 { animation-delay: 1240ms; }

@keyframes line-in {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .line {
    opacity: 1;
    transform: none;
    animation: none !important;
  }
}

.hero {
  .line--1 {
    @include mono-body;
    color: var(--phosphor-dim);
  }
}

.name {
  @include display;
  color: var(--phosphor);
  font-weight: 400;
  text-transform: uppercase;
  margin-top: var(--space-4);
  word-break: break-word;
}

.meta {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-32);
  align-items: start;

  @include phone-small {
    grid-template-columns: 1fr;
    gap: var(--space-16);
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  &__row {
    display: grid;
    grid-template-columns: 5.5rem 1fr;
    gap: var(--space-12);
    align-items: baseline;
    font-size: 0.95rem;

    @include phone {
      grid-template-columns: 4.5rem 1fr;
      font-size: 0.85rem;
      gap: var(--space-8);
    }

    dt {
      color: var(--phosphor-dim);
      font-weight: 500;
    }

    dd {
      color: var(--phosphor);
      margin: 0;
    }
  }
}

.status-dot {
  color: var(--phosphor);
  text-shadow: 0 0 8px var(--phosphor-glow);
  margin-right: 0.3em;
  font-size: 0.7em;
  vertical-align: middle;
  animation: pulse 2.4s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.about {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);

  .prompt-line {
    @include mono-body;
    color: var(--phosphor-dim);
  }

  &__body {
    @include mono-body;
    color: var(--phosphor);
    max-width: 60ch;
    font-size: 1.05rem;
    line-height: 1.55;

    @include phone {
      font-size: 0.95rem;
    }
  }
}

.links {
  display: flex;
  flex-direction: column;
  gap: var(--space-12);

  .prompt-line {
    @include mono-body;
    color: var(--phosphor-dim);
  }

  &__nav {
    display: flex;
    flex-direction: column;
  }
}

.cli {
  @include mono-body;
  color: var(--phosphor-dim);
  display: flex;
  align-items: center;
  margin-top: var(--space-16);
}

.cursor {
  display: inline-block;
  color: var(--phosphor);
  text-shadow: 0 0 8px var(--phosphor-glow);
  animation: blink 1.06s steps(2, end) infinite;
  font-size: 1em;
  line-height: 1;
}
</style>
