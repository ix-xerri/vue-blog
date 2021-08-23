<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="user">
          <h1>{{ user.name }}</h1>
          <div class="address">
            <h3>Address</h3>
            <p>{{ user.address.street }}</p>
            <p>{{ user.address.zipcode }}</p>
          </div>
          <div class="company">
            <h3>Company</h3>
            <p>{{ user.company.name }}</p>
            <p><i>{{ user.company.catchPhrase }}</i></p>
          </div>
          <div class="contact">
            <h3>Contact</h3>
            <p>{{ user.phone }}</p>
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

<style lang="scss">
  @import '../styles/variables.scss';

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

  .user div {
    border-bottom: 1px dotted $color-medium;
  }

  h3 {
    text-decoration: underline;
  }
</style>
