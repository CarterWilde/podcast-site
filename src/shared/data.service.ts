import axios from 'axios';

import { API } from './config';

const getEpisodes = async function () {
    try {
        const response = await axios.get(`${API}/episodes`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const dataService = {
    getEpisodes
  };
  