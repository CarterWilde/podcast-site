import Vue from "vue";
import Vuex, { Store } from "vuex";

import { GET_EPISODES } from "./mutation-types";
import Episode from '@/components/EpisodeClass';

import { dataService } from '@/shared/data.service';

Vue.use(Vuex);

const state = () => ({
  episodes: []
});
const mutations = {
  [GET_EPISODES](state: any, episodes: Episode) {
    state.episodes = episodes;
  }
};

const actions = {
  async getEpisodes(store: any){
    const episodes = await dataService.getEpisodes();
    store.commit(GET_EPISODES, episodes);
  }
};

const getters = {};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters,
  modules: {}
});
