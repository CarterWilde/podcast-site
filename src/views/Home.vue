<template>
  <div>
    <Episode v-for="episode in episodes" :key="episode.id" :episode="episode"></Episode>
  </div>
</template>

<script>
// @ is an alias to /src
import Episode from "@/components/Episode";
import EpisodeClass from "@/components/EpisodeClass"
import { mapActions, mapState } from 'vuex';

export default {
  name: "home",
  components: {
    Episode
  },
  async created(){
    await this.loadEpisodes();
  },
  methods: {
    ...mapActions(['getEpisodes']),
    async loadEpisodes(){
      await this.getEpisodes();
    }
  },
  computed: {
    ...mapState(['episodes'])
  },
};
</script>
