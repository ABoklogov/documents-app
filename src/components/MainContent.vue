<template>
  <div class="content">
    <div class="content__left">
      <FormSearch />
      <div class="content__document-list">
        <div
          v-if="loading"
          class="content__loader card flex justify-content-center align-items-center"
        >
          <PrimeSpiner />
        </div>

        <DocumentList
          v-else
          :documents="documents"
          class="content-list-position"
        />
      </div>
    </div>
    <div class="content__right">
      <DocumentCard v-if="document" :document="document" />
      <div v-else class="content__right-text">
        <span>Выберите документ, чтобы посмотреть его содержиое</span>
      </div>
    </div>
    <PrimeToast />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormSearch from "@/components/FormSearch.vue";
import DocumentList from "@/components/DocumentList.vue";
import DocumentCard from "@/components/DocumentCard.vue";
import { mapState } from "pinia";
import { useDocumentStore } from "@/stores/DocumentStore";
import { useToast } from "primevue/usetoast";

export default defineComponent({
  name: "MainContent",
  components: {
    FormSearch,
    DocumentList,
    DocumentCard,
  },
  setup() {
    const toast = useToast();
    const store = useDocumentStore();
    store.$subscribe((mutation, state) => {
      if (state.error) {
        toast.add({
          severity: "error",
          summary: "Error Message",
          detail: state.error,
          life: 3000,
        });
      }
    });
  },
  computed: {
    ...mapState(useDocumentStore, {
      documents: "documents",
      loading: "loading",
      error: "error",
      document: "currentDocument",
    }),
  },
});
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  border-radius: 10px;
  background: #fdfdfd;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

  &__left {
    height: 100%;
  }
  &__document-list,
  &__loader {
    min-height: 200px;
    height: 85%;
  }
  &__right-text {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
}
.content-list-position {
  margin-top: 29px;
}
@media screen and (min-width: 320px) {
  .content {
    flex-direction: column;
    height: auto;

    &__left {
      width: 100%;
      padding: 15px 10px;
    }
    &__right {
      width: 100%;
      padding: 10px;
    }
  }
}
@media screen and (min-width: 600px) {
  .content {
    &__left {
      padding: 20px 15px;
    }
    &__right {
      padding: 20px;
    }
  }
}
@media screen and (min-width: 1100px) {
  .content {
    flex-direction: row;
    height: 850px;

    &__left {
      width: 25%;
      padding: 27px 20px;
      border-right: 1px solid #e0e0e0;
    }
    &__right {
      width: 75%;
      padding: 30px;
    }
  }
}
</style>