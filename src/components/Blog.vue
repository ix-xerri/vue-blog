<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="blog-post" v-for='post in posts' :key='post.id'>
      <h3 class="blog-title">
        <router-link :to="'/blog/'+ post.id">
          {{ post.title }}
        </router-link>
      </h3>
      <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog',
  data() {
    return { msg: 'Parallels - Blog' };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch('posts');
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
