import axios from "axios";

const axiosClient =  axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

axiosClient.interceptors.request.use((config)=> {
    return {
        ...config, params: {
            ...config.params,
            api_key: process.env.REACT_APP_API_KEY
        }
    }
})

export default axiosClient