import axios from 'axios';

axios.defaults.baseURL = 'http://68.183.212.124:3000';

async function fetchDocuments() {
  const data = await axios.get('/user/docs');
  return data;
}

const API = {
  fetchDocuments
};
export default API;