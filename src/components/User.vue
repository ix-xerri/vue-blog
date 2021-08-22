<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div id="articles">
          <h1>{{ user.name }}</h1>
          <div class="article">
            <p>{{ user.address.street }}</p>
            <p>{{ user.address.zipcode }}</p>
            <p>{{ user.email }}</p>
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
    return { id: this.$route.params.userId };
  },
  created() {
    this.$store.dispatch('user', this.id);
  },
  computed: {
    ...mapGetters(['user']),
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
