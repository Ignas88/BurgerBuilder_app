import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://burger-app-react-4cdfe.firebaseio.com/'
});

export default instance;