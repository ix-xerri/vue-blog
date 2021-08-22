import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  strict: true,
  state: {
    posts: [],
    post: {},
    comments: [],
  },

  getters: {
    posts: (state) => state.posts,
    post: (state) => state.post,
    comments: (state) => state.comments,
  },

  mutations: {
    posts: (state, payload) => {
      state.posts = payload;
    },
    post: (state, payload) => {
      state.post = payload;
    },
    comments: (state, payload) => {
      state.comments = payload;
    },
  },
  actions: {
    posts: (context) => {
      axios.get('http://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          context.commit('posts', response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },

    post: (context, id) => {
      axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
          context.commit('post', response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },

    comments: (context, id) => {
      axios.get(`http://jsonplaceholder.typicode.com/post/${id}/comments`)
        .then((response) => {
          context.commit('comments', response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
});
