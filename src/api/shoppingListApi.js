import axios from 'axios';

const getShoppingOpenData = axios.create({
    method: 'get',
    baseURL: 'https://lifeegy-backend.herokuapp.com/tasks/getFake'
});

export default getShoppingOpenData;
