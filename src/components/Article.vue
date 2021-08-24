<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div id="articles">
          <router-link :to="'/user/'+ user.id">
            <small class="user">{{ user.name }}</small>
          </router-link>
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
  async created() {
    const post = await this.$store.dispatch('post', this.id);
    this.$store.dispatch('user', post.data.userId);

    this.$store.dispatch('comments', this.id);
  },
  computed: {
    ...mapGetters(['comments', 'post', 'user']),
  },
};
</script>

<style lang="scss">
  @import '../styles/variables.scss';
  @import '../styles/media-queries.scss';

  .title {
    text-transform: capitalize;
    margin-bottom: 2rem;

    @include r('md') {
      border-bottom: 1px dotted $color-medium;
    }
  }

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
