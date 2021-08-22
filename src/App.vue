<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/myStore">My Store</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
  @import 'styles/media-queries.scss';

  $green: green;
  $blue: blue;

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $green;
    margin-top: 60px;

    @include r('md') {
      color: $blue;
    }
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
