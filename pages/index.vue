<template>
  <Card>
    <div class="inner_card_wrapper">
      <div class="left">
        <div class="avatar"><Avatar /></div>
        <h1 class="title">Hi there 👋 I am Tasos</h1>
        <span class="subtitle_wrapper">
          <p>I code, read, write and sometimes run.</p>
          <p>
            Building amazing products for
            <NuxtLink to="https://moveo.ai" target="_blank">Moveo.AI</NuxtLink>.
          </p>
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
    padding: var(--space-96) var(--space-44) var(--space-32) var(--space-44);
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

    .title {
      @include heading-regular;

      color: var(--text-color);
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
      }
    }

    @include tablet {
      justify-content: center;
      align-items: center;
      padding: var(--space-96) var(--space-32) var(--space-32) var(--space-32);
    }

    @include phone {
      padding-top: var(--space-32);
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
    justify-content: space-evenly;
    gap: 0;
  }
}
</style>
