import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.tvmaze.com/search/shows?q=start%20wars'
});

export default api