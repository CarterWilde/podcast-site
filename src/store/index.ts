import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = () => {};

const mutations = {};

const actions = {};

const getters = {};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters,
  modules: {}
});
