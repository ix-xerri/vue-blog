<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="blog-post" v-for='post in posts' :key='post.id'>
      <p class="blog-user"><small>{{post.userId}}</small></p>
      <h3 class="blog-title">{{post.title}}</h3>
      <p>{{post.body}}</p>
    </div>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
export default {
  name: 'myStore',
  data() {
    return { msg: 'Welcome to my Vuex' };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  mounted() {
    this.$store.dispatch('getPosts');
    this.$store.dispatch('getUsers');
  },
};
</script>
<style lang="scss">
  @import '../styles/variables.scss';

  .blog-post {
    border-bottom: 1px solid $color-medium;
  }

  .blog-title {
    text-transform: capitalize;
  }

  .blog-user {
    color: $color-medium;
  }
</style>
