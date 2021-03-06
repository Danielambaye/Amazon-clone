import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'http://localhost:5001/sept-f2d7d/us-central1/api',
});

export default instance;
