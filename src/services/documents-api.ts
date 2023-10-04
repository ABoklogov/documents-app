import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_SERVICE_URL;

async function fetchDocuments() {
  const data = await axios.get('/user/docs');
  return data;
}
async function fetchSearchDocuments(query: string) {
  const data = await axios.get(`/user/docs?search=${query}`);
  return data;
}

const API = {
  fetchDocuments,
  fetchSearchDocuments
};
export default API;