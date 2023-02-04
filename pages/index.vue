<template>
  <Card>
    <div class="inner_card_wrapper">
      <div class="left">
        <Avatar />
        <span class="title">Hi there 👋 I am Tasos</span>
        <span class="subtitle_wrapper">
          <span class="subtitle">I code, read, write and sometimes run.</span>
          <span class="subtitle"
            >Developing amazing products for
            <NuxtLink to="https://moveo.ai" target="_blank"
              >Môveo.AI</NuxtLink
            ></span
          >
        </span>
      </div>
      <div class="right">
        <Button :to="'https://github.com/anavalo'" :text="'Github'"
          ><IconsGithub
        /></Button>

        <Button
          :to="'https://www.linkedin.com/in/anastasios-tsournos/'"
          :text="'Linkedin'"
          ><IconsLinkdedin
        /></Button>

        <Button
          :to="'https://soundcloud.com/anastasios-tsournos'"
          :text="'Soundcloud'"
          ><IconsSoundcloud
        /></Button>
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
    padding: var(--space-60) var(--space-32) var(--space-32) var(--space-32);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-32);
    border-right: 1px solid var(--primary-color);

    .title {
      @include heading-regular;

      color: var(--text-color);
      padding-top: var(--space-16);
    }

    .subtitle_wrapper {
      @include body-regular;

      color: var(--text-color);
      display: flex;
      flex-direction: column;
      gap: var(--space-8);
      align-items: center;

      @include tablet {
        align-items: baseline;
      }

      a {
        color: var(--base-color-4-main);
        text-decoration: none;
      }
    }

    @include tablet {
      border-right: none;
      align-items: baseline;
      padding-top: var(--space-32);
    }
  }

  .right {
    grid-column: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: var(--space-64);

    @include tablet {
      grid-column: 1;
      padding: var(--space-32);
      padding-top: 0;
    }
  }
}
</style>
