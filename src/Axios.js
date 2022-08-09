import axios from 'axios';
import { baseUrl } from './Constats/Constants';

const instance = axios.create({
  baseURL: baseUrl,
});
export default instance;
