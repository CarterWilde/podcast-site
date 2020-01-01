import axios from "axios";

import { API } from "./config";

import Episode from "@/components/EpisodeClass";

const getEpisodes = async function () {
    try {
        const response = await axios.get(`${API}/episodes`);
        response.data.forEach((episode: Episode) => {
            episode.published_at = new Date(episode.published_at);
        });
        return (response.data.filter((episode: Episode) => {
            if(episode.published_at.valueOf() < Date.now()){
                return episode.published_at;
            }
        }));
    } catch (error) {
        return [];
    }
};

export const dataService = {
    getEpisodes
  };
  