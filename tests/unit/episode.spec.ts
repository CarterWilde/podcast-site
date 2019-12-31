import { shallowMount } from "@vue/test-utils";
import Episode from "@/components/Episode.vue";
import EpisodeClass from "@/components/EpisodeClass";

describe("Episode.vue", () => {
  it("renders props.episode.title when passed", () => {
    const episode = new EpisodeClass(0, 'title', 'audio_url', 'artwork_url', 'description', 'summary', 'artist', 'tags', new Date(Date.now()), 10, true, '1234', {}, 1, 1, false, true, 10);
    const wrapper = shallowMount(Episode, {
      propsData: { episode }
    });
    expect(wrapper.text()).toMatch(episode.title);
  });
});
