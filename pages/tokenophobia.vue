<template>
  <Card>
    <div :class="['terminal-doc', { booted }]">
      <section class="cmd">
        <p class="line line--1">
          <span class="prompt">$</span> dict tokenophobia
        </p>
      </section>

      <hr class="rule line line--2" aria-hidden="true" />

      <section class="entry line line--3">
        <div class="entry__head">
          <h1 class="headword">tokenophobia</h1>
          <span class="meter" aria-label="token usage: almost full">
            <span class="meter__bracket">[</span><span
              class="meter__fill"
              >██████████</span
            ><span class="meter__empty">░░</span
            ><span class="meter__bracket">]</span>
          </span>
        </div>
        <p class="phonetic">/ˌtoʊ.kə.noʊˈfoʊ.bi.ə/</p>
        <p class="pos">noun</p>
      </section>

      <section class="senses line line--4">
        <div class="sense">
          <span class="sense__num">1.</span>
          <p class="sense__def">
            the dread of the usage window resetting with tokens still
            unspent.
          </p>
        </div>
        <div class="sense">
          <span class="sense__num">2.</span>
          <p class="sense__def">
            <em>by extension,</em> the anxiety of hitting one's AI token
            limit mid-thought; the compulsion to ration remaining prompts
            as the meter drains.
          </p>
        </div>
      </section>

      <section class="etym line line--5">
        <h2 class="section-label">etymology</h2>
        <p class="etym__body">
          <em>token</em> (the unit AI systems bill your thinking in) +
          <em>-phobia</em> (Ancient Greek <em>phóbos</em>, "fear, dread")
        </p>
      </section>

      <section class="usage line line--6">
        <h2 class="section-label">usage</h2>
        <blockquote class="usage__example">
          "She sent three throwaway prompts at 11:58&nbsp;p.m.,
          pure <em>tokenophobia</em>."
        </blockquote>
        <blockquote class="usage__example">
          "I keep four Claude Code tabs open until I hit my
          session limit. Pure <em>tokenophobia</em>."
        </blockquote>
      </section>

      <section class="related line line--7">
        <h2 class="section-label">related terms</h2>
        <p class="related__list">
          <span class="related__arrow">→</span> token anxiety
          <span class="related__sep"></span>
          <span class="related__arrow">→</span> context-window dread
        </p>
      </section>

      <section class="attrib line line--8">
        <h2 class="section-label">first known use</h2>
        <p class="attrib__body">
          Coined by Anastasios Tsournos, 2026.
        </p>
        <p class="attrib__source">
          <span class="attrib__arrow">↳</span>
          <a
            href="https://www.linkedin.com/posts/anastasios-tsournos_tokenophobia-n-the-dread-of-the-usage-share-7470463196815015936-cILa"
            target="_blank"
            rel="noopener"
            class="attrib__link"
            >original linkedin post</a
          >
        </p>
      </section>

      <div class="actions line line--9">
        <button
          class="cite-btn"
          :class="{ 'cite-btn--copied': copied }"
          @click="copyCitation"
        >
          {{ copied ? '✓ copied' : '⌘ copy citation' }}
        </button>
      </div>

      <hr class="rule line line--10" aria-hidden="true" />

      <p class="cli line line--11">
        <span class="prompt">$</span><span class="cursor">█</span>
      </p>
    </div>
  </Card>
</template>

<script setup>
const booted = ref(false);
const copied = ref(false);

useSeoMeta({
  title: 'tokenophobia — definition, meaning & origin | tsournos.com',
  description:
    'tokenophobia (n.) — the dread of the usage window resetting with tokens still unspent. Coined by Anastasios Tsournos, 2026.',
  ogTitle: 'tokenophobia — definition, meaning & origin',
  ogDescription:
    'tokenophobia (n.) — the dread of the usage window resetting with tokens still unspent. Coined by Anastasios Tsournos, 2026.',
  ogUrl: 'https://www.tsournos.com/tokenophobia',
  ogType: 'article',
  twitterCard: 'summary',
  twitterTitle: 'tokenophobia — definition, meaning & origin',
  twitterDescription:
    'tokenophobia (n.) — the dread of the usage window resetting with tokens still unspent. Coined by Anastasios Tsournos, 2026.',
});

useHead({
  link: [
    { rel: 'canonical', href: 'https://www.tsournos.com/tokenophobia' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'DefinedTerm',
        name: 'tokenophobia',
        description:
          'The dread of the usage window resetting with tokens still unspent.',
        inDefinedTermSet: {
          '@type': 'DefinedTermSet',
          name: 'AI terminology',
        },
        inLanguage: 'en',
        url: 'https://www.tsournos.com/tokenophobia',
        creator: {
          '@type': 'Person',
          name: 'Anastasios Tsournos',
          url: 'https://www.tsournos.com',
          sameAs: [
            'https://www.linkedin.com/in/anastasios-tsournos/',
            'https://github.com/anavalo',
          ],
        },
        dateCreated: '2026',
      }),
    },
  ],
});

onMounted(() => {
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

function copyCitation() {
  const text =
    'tokenophobia (n.) — coined by Anastasios Tsournos, 2026. https://www.tsournos.com/tokenophobia';
  navigator.clipboard.writeText(text).then(() => {
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  });
}
</script>

<style lang="scss" scoped>
.terminal-doc {
  font-family: var(--font-mono);
  color: var(--phosphor);
  display: flex;
  flex-direction: column;
  gap: var(--space-24);

  @include phone {
    gap: var(--space-20);
  }
}

.line {
  opacity: 0;
  transform: translateY(4px);
}

.booted .line {
  animation: line-in 280ms ease-out forwards;
}

.booted .line--1 {
  animation-delay: 0ms;
}
.booted .line--2 {
  animation-delay: 160ms;
}
.booted .line--3 {
  animation-delay: 300ms;
}
.booted .line--4 {
  animation-delay: 460ms;
}
.booted .line--5 {
  animation-delay: 640ms;
}
.booted .line--6 {
  animation-delay: 800ms;
}
.booted .line--7 {
  animation-delay: 960ms;
}
.booted .line--8 {
  animation-delay: 1080ms;
}
.booted .line--9 {
  animation-delay: 1200ms;
}
.booted .line--10 {
  animation-delay: 1320ms;
}
.booted .line--11 {
  animation-delay: 1440ms;
}

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

.prompt {
  color: var(--phosphor-dim);
  margin-right: var(--space-8);
  user-select: none;
}

.rule {
  border: none;
  height: 1px;
  background: var(--phosphor-dim);
  margin: 0;
  opacity: 0.4;
}

.section-label {
  @include mono-label;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.cmd {
  @include mono-body;
  color: var(--phosphor-dim);
}

.entry {
  display: flex;
  flex-direction: column;
}

.entry__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-16);
  flex-wrap: wrap;
}

.headword {
  @include display;
  font-size: 8rem;
  color: var(--phosphor);
  font-weight: 400;
  text-transform: lowercase;
  word-break: break-word;

  @include tablet {
    font-size: 5.5rem;
  }

  @include phone {
    font-size: 3.8rem;
  }

  @include phone-small {
    font-size: 2.8rem;
  }
}

.phonetic {
  @include mono-body;
  color: var(--phosphor-dim);
  font-style: italic;
  margin-top: var(--space-4);
}

.pos {
  @include mono-body;
  color: var(--phosphor-dim);
  font-style: italic;
}

.meter {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  white-space: nowrap;
  user-select: none;

  @include phone {
    font-size: 0.78rem;
  }
}

.meter__bracket {
  color: var(--phosphor-dim);
}

.meter__fill {
  color: var(--phosphor);
  text-shadow: 0 0 8px var(--phosphor-glow);
  animation: meter-pulse 2.4s ease-in-out infinite;
}

.meter__empty {
  color: var(--text-mute);
  opacity: 0.4;
}

@keyframes meter-pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

.senses {
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
  padding-left: var(--space-4);
}

.sense {
  display: grid;
  grid-template-columns: 1.5rem 1fr;
  gap: 0;
  align-items: baseline;
}

.sense__num {
  @include mono-body;
  color: var(--phosphor-dim);
  font-weight: 500;
}

.sense__def {
  @include mono-body;
  max-width: 55ch;

  em {
    font-style: italic;
    color: var(--phosphor-dim);
  }
}

.etym {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.etym__body {
  @include mono-body;
  max-width: 55ch;
  padding-left: var(--space-4);

  em {
    font-style: italic;
  }
}

.usage {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.usage__example {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 400;
  line-height: 1.6;
  font-style: italic;
  color: var(--phosphor);
  max-width: 55ch;
  padding-left: var(--space-16);
  margin: 0;
  opacity: 0.75;

  @include phone {
    font-size: 0.8rem;
  }

  em {
    font-style: normal;
    font-weight: 500;
  }
}

.related {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.related__list {
  @include mono-body;
  padding-left: var(--space-4);
}

.related__arrow {
  color: var(--phosphor-dim);
  margin-right: var(--space-4);
}

.related__sep {
  display: inline-block;
  width: var(--space-16);
}

.attrib {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.attrib__body {
  @include mono-body;
  padding-left: var(--space-4);
}

.attrib__source {
  @include mono-body;
  padding-left: var(--space-4);
  font-size: 0.9rem;

  @include phone {
    font-size: 0.85rem;
  }
}

.attrib__arrow {
  color: var(--phosphor-dim);
  margin-right: var(--space-8);
}

.attrib__link {
  color: var(--phosphor);
  text-decoration: underline;
  text-decoration-color: var(--phosphor-dim);
  text-underline-offset: 3px;
  transition: text-decoration-color 120ms;

  &:hover,
  &:focus-visible {
    text-decoration-color: var(--phosphor);
  }
}

.actions {
  display: flex;
  justify-content: flex-end;
}

.cite-btn {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  padding: var(--space-8) var(--space-16);
  background: transparent;
  border: 1px dashed var(--phosphor-dim);
  color: var(--phosphor-dim);
  cursor: pointer;
  transition: background-color 120ms, color 120ms, border-color 120ms;

  @include phone {
    font-size: 0.75rem;
    padding: var(--space-8) var(--space-12);
  }

  &:hover,
  &:focus-visible {
    background: var(--phosphor);
    color: var(--bg);
    border-color: var(--phosphor);
    outline: none;
  }

  &--copied {
    color: var(--phosphor);
    border-color: var(--phosphor);
    text-shadow: 0 0 6px var(--phosphor-glow);
  }
}

.cli {
  @include mono-body;
  color: var(--phosphor-dim);
  display: flex;
  align-items: center;
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
