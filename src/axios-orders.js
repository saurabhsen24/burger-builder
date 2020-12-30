import axios from 'axios';

export default axios.create({
    baseURL: 'https://travel-practice.firebaseio.com/'
})