import Vuex from 'vuex';
import Vue from 'vue';
import userModule from './module/user';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userModule,
  },
});
