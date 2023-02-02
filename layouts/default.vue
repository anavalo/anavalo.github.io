<template>
  <Navbar />
  <div class="default_wrapper"><slot /></div>
</template>

<styles lang="scss" scoped>
.default_wrapper {
  height: calc(100% - #{$space-40});
  display: flex;
  align-items: center;
  justify-content: center;
}
</styles>
