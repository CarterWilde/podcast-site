<template>
  <article style="padding: 0% 10%">
    <div style="border: 2px solid #2270E6">
      <img :src="episode.artwork_url" alt="Yet Another Podcast" width="100%">
      <section class="podcast-header split">
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
$primary-background-color: #3F8AFC
$primary-foreground-color: #FFFFFF
$secondary-background-color: #2270E6
$secondary-foreground-color: #FFFFFF
$accent-background-color: #9EC61D
$accent-foreground-color: #FFFFFF

.podcast-header
  color: $secondary-foreground-color
  background-color: $primary-background-color
  p
    margin: 0
    padding: 5%
    font-weight: 600
    font-size: 1.5em
    &:nth-child(2)
      text-align: right
      font-weight: 100
.content
  margin: 0
  padding: 2%
  background-color: $secondary-background-color
.cta
  display: block
  background-color: $accent-background-color
  color: $accent-foreground-color
  text-decoration: none
  text-align: center
  padding: 2% 5%
    
</style>