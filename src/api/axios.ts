import Axios from 'axios';

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2023-02-01

export const api_key = 'eSxMHMlniHW25NU8dmhu5saDeoVYlraYEw0fEKfb';
export const axios = Axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod',
  headers: {
    Accept: 'application/json',
  },
});
