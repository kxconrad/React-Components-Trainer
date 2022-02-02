import axios from 'axios';

const publicApis = (url) => {
    return axios.create({
        method: 'get',
        baseURL: url
    });
}

export default publicApis;
