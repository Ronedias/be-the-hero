import axios from 'axios';

const api = axios.create({
    baseURL: 'https://roneproducoes.ddns.net:8243/api',
})

export default api;
