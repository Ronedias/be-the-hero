import axios from 'axios';

const api = axios.create({
    baseURL: 'http://roneproducoes.ddns.net:8243',
})

export default api;