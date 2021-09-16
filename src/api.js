import axios from "axios";

const api = axios.create({
    //baseURL: 'https://api.tvmaze.com/search/shows?q=start%20wars'
    //baseURL: 'https://pokeapi.co/api/v2/pokemon/'
    baseURL: 'http://localhost:3001/api/v1/entregas'
});

export default api