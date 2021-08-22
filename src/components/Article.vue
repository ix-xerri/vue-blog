<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div id="articles">
          <small class="user">{{ user.name }}</small>
          <div class="article">
            <h2 class="title">{{ post.title }}</h2>
            <div class="body">{{ post.body }}</div>
          </div>

          <div class="comments">Comments</div>
          <div class="comment" v-for="comment in comments" :key='comment.id'>
            <div class="body">{{ comment.body }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return { id: this.$route.params.postId };
  },
  created() {
    this.$store.dispatch('post', this.id);
    this.$store.dispatch('comments', this.id);
    this.$store.dispatch('user', 1);
  },
  computed: {
    ...mapGetters(['comments', 'post', 'user']),
  },
};
</script>

<style>
  .comment {
    padding: 10px 20px;
    font-style: italic;
  }
  .title {
      font-size: 20px;
      font-weight: 700;
      padding-bottom: 20px;
  }
  .comments{
    font-size: 20px;
      font-weight: 700;
      padding-top: 20px;
  }
</style>
