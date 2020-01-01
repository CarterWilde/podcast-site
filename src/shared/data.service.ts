import axios from 'axios';

import { API } from './config';

const getEpisodes = async function () {
    try {
        const response = await axios.get(`${API}/episodes`);
        return response.data;
    } catch (error) {
        return [];
    }
};

export const dataService = {
    getEpisodes
  };
  