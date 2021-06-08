import axios from 'axios';
const client = axios.create({
  baseURL:
    'https://outside-in-dev-api.herokuapp.com/DMb1X6GTNgos9d5Ax29VCTv8pXSZAZ4H',
});
const api = {
  loadRestaurants() {
    return client.get('/restaurants').then(response => response.data);
  },
  createRestaurant(name) {
    return client.post('/restaurants', {name}).then(response => response.data);
  },
};
export default api;
