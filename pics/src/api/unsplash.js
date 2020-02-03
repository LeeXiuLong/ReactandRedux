import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 
        'Client-ID cf77429e1b4bb74f3a00d7a1bf0c4b45bba09fdbd6b8e5d3e441c5636cdde6dd'
    }
});