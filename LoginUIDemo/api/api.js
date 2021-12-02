import axios from 'axios';

export default axios.create({
    baseURL: 'https://gorest.co.in/public/v1/',
    timeout: 1000,
    headers: {
        'Authorization': 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});