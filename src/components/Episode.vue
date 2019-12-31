<template>
  <p>{{ this.episode && this.episode.title || null}}</p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import EpisodeClass from "./EpisodeClass";

@Component
export default class Episode extends Vue {
  @Prop() episode!: EpisodeClass;
}
</script>