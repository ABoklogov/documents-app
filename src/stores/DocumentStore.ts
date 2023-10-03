import { defineStore } from 'pinia'
import Documents from '@/interfaces/Documents.interface';
import API from '@/services/documents-api';

interface State {
  documents: Documents[];
  loading: boolean;
  error: string;
  loadingSearch: boolean;
  currentDocument: Documents | null,
}

export const useDocumentStore = defineStore('DocumentStore', {
  state: (): State => ({
    documents: [],
    loading: false,
    error: '',
    loadingSearch: false,
    currentDocument: null,
  }),
  actions: {
    // получение всех документов
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
    // поиск документов
    async searchDocuments(query: string) {
      try {
        this.loadingSearch = true;

        const { data } = await API.fetchSearchDocuments(query);
        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          this.loadingSearch = false;
          this.error = '';
          this.documents = data;
        }
      } catch (error) {
        if (error instanceof Error) {
          this.loadingSearch = false;
          this.error = error.message;
        }
      }
    },
    // выбор документа
    changeDocument(document: Documents) {
      this.currentDocument = document;
    },
    // удаление документа
    deleteDocument(id: number) {
      this.documents = this.documents.filter(el => el.id !== id);
    }
  },
})