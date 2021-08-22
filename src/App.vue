<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/blog">Blog</router-link>
  </div>
  <router-view/>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  watch: {
    $route(to, from) {
      document.title = to.meta.title || 'Your Website';
    },
  },
});
</script>

<style lang="scss">
  @import 'styles/variables.scss';
  @import 'styles/reset.scss';

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: $color-dark;
    margin-top: 60px;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: $color-primary;

      &.router-link-exact-active {
        color: $color-secondary;
      }
    }
  }
</style>
