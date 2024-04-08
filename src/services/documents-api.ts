import axios from 'axios';

axios.defaults.baseURL = 'https://demo.ecm-consulting.ru/js-testing-service/data';

const body = {
  // attributes: ['name'],
  order: {
    attr: 'name',
    asc: true
  },
  // filters: [
  //   {
  //     attr: 'name',
  //     value: {},
  //     op: "eq"
  //   }
  // ],
  size: 100,
  offset: 0
}

async function fetchDocumentsList() {
  const data = await axios.post('/list', body);
  return data;
}
async function fetchDocument(id: string) {
  const data = await axios.get(`/document/${id}`);
  return data;
}
async function fetchDescription() {
  const data = await axios.get('/description');
  return data;
}

const API = {
  fetchDocumentsList,
  fetchDocument,
  fetchDescription
}
export default API;