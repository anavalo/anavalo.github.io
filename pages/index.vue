<template>
  <Card>
    <div class="inner_card_wrapper">
      <div class="left">
        <div class="avatar"><Avatar /></div>
        <h1 class="header">Tasos Tsournos</h1>
        <h2 class="subheader">Software Engineer</h2>
        <span class="subtitle_wrapper">
          Building resilient, cloud-native SaaS platforms with Kubernetes,
          Node.js, and React.
        </span>
      </div>
      <div class="right">
        <div class="inner_right">
          <Button :to="'https://github.com/anavalo'" :text="'Github'"
            ><IconsGithub
          /></Button>

          <Button
            :to="'https://www.linkedin.com/in/anastasios-tsournos/'"
            :text="'LinkedIn'"
            ><IconsLinkdedin
          /></Button>

          <Button :to="'https://dev.to/anavalo'" :text="'Blog'"
            ><IconsSoundcloud
          /></Button>
        </div>
      </div>
    </div>
  </Card>
</template>

<style lang="scss">
.inner_card_wrapper {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @include tablet {
    grid-template-columns: 1fr;
  }

  .left {
    grid-column: 1;
    padding: var(--space-64) var(--space-44) var(--space-32) var(--space-44);
    display: flex;
    flex-direction: column;
    border-right: 1px solid var(--primary-color);

    .avatar {
      padding-bottom: var(--space-84);

      @include tablet {
        padding-bottom: var(--space-32);
      }

      @include phone-small {
        padding-bottom: var(--space-16);
      }
    }

    .header {
      @include heading-regular;

      color: var(--text-color);
      padding-bottom: var(--space-8);
    }

    .subtitle_wrapper {
      @include body-regular;

      color: var(--text-color);
      display: flex;
      flex-direction: column;
      gap: var(--space-8);

      a {
        color: var(--text-color);
        cursor: pointer;
      }

      @include tablet {
        align-items: center;
        text-align: center;
      }
    }

    .subheader {
      @include body-regular-italic;
      color: var(--text-color-secondary);
      padding-bottom: var(--space-16);

      padding-bottom: var(--space-32);

      @include tablet {
        padding-bottom: var(--space-32);
      }

      @include phone {
        padding-bottom: var(--space-16);
      }

      @include phone-small {
        padding-bottom: var(--space-8);
      }
    }

    @include tablet {
      justify-content: center;
      align-items: center;
      padding: var(--space-64) var(--space-32) var(--space-32) var(--space-32);
    }

    @include phone {
      padding-top: var(--space-64);
    }

    @include phone-small {
      gap: var(--space-16);
    }
  }

  .right {
    grid-column: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @include tablet {
      grid-column: 1;
    }

    .inner_right {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: var(--space-64);
      gap: var(--space-32);
      width: calc(100% - 8rem);

      @include tablet {
        padding: 0;
        width: clamp(20rem, 50%, 400px);
      }

      @include phone {
        gap: var(--space-24);
      }

      @include phone-small {
        gap: var(--space-16);
        padding-top: 0;
      }
    }
  }

  @include tablet {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: var(--space-32);
  }

  @include phone {
  }
}
</style>
