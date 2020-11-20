import axios from 'axios';

const coinsAPI = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
});

export default coinsAPI;
