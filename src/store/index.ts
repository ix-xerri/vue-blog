import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    posts: [],
    users: [],
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    SET_USERS(state, users) {
      state.users = users;
    },
  },
  actions: {
    getPosts({ commit }) {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          commit('SET_POSTS', response.data);
        });
    },
    getUsers({ commit }) {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          commit('SET_USERS', response.data);
        });
    },
  },
  modules: {
  },
});
