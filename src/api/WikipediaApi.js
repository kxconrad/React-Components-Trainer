import axios from 'axios';

function getQuery(query) {

    return axios.create({
        baseURL: 'https://en.wikipedia.org/w/api.php',
        params: {
            origin: '*',
            action: 'query',
            list: 'search',
            srsearch: query,
            format: 'json'

        }
    });

};

export default getQuery;
