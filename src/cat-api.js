import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_dhRO4jJojnKckandIJmCGeRe1n98Esknx7JwZyFhq8sopqrjjvaSvxYhyOkFZK27';

export function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data)
    .catch(error => Promise.reject(error));
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data)
    .catch(error => Promise.reject(error));
}
