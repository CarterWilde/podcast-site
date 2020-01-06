<template>
  <article style="padding: 0% 10%">
    <div class="episode-card" style="border: 2px solid #2270E6">
      <img :src="episode.artwork_url" alt="Yet Another Podcast" width="100%">
      <section class="episode-header split">
        <p>{{ episode.title }}</p>
        <p>{{ episode.published_at.toDateString() }}</p>
      </section>
      <section class="content">
        <pre>{{ episode.description }}</pre>
        <audio :src="episode.audio_url" style="width:100%" controls></audio>
      </section>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import EpisodeClass from "./EpisodeClass";

@Component
export default class Episode extends Vue {
  @Prop() episode!: EpisodeClass;
}
</script>

<style lang="sass" scoped>
</style>