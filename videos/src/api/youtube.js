import axios from 'axios';

const KEY = 'AIzaSyASJtG4ZyunyOGCWPELDf8bWfEnTe9-5a4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
});