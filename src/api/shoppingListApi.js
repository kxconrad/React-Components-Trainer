import axios from 'axios';

const getShoppingOpenData = axios.create({
    method: 'get',
    baseURL: 'https://lifeegy-backend.herokuapp.com/tasks/getFake'
    // headers: {
    //     'Access-C ontrol-Allow-Origin': '*',
    //     'Origin': 'https://lifeegy-backend.herokuapp.com/',
    //     'Referer': 'https://lifeegy-backend.herokuapp.com/'
    // }
});

export default getShoppingOpenData;
