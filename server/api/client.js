import axios from "axios";

const client =  axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

client.interceptors.request.use((config)=> {
    return {
        ...config, params: {
            ...config.params,
            api_key: process.env.API_KEY,            
        }
    }
})

export default client