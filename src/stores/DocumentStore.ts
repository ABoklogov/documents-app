import { defineStore } from 'pinia'
import Documents from '@/interfaces/Documents.interface';
import API from '@/services/documents-api';

interface State {
  documents: Documents[];
  loading: boolean;
  error: string;
}

export const useDocumentStore = defineStore('DocumentStore', {
  state: (): State => ({
    documents: [],
    loading: false,
    error: ''
  }),
  // getters: {
  //   doubleCount: (state) => state.count * 2,
  // },
  actions: {
    async getDocuments() {
      try {
        this.loading = true;

        const { data } = await API.fetchDocuments();
        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          this.loading = false;
          this.error = '';
          this.documents = data;
        }
      } catch (error) {
        if (error instanceof Error) {
          this.loading = false;
          this.error = error.message;
        }
      }
    },
  },
})