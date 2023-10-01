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

        <DocumentList v-else :documents="documents" />
      </div>
    </div>
    <div class="content__right"></div>
    <PrimeToast />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import FormSearch from "@/components/FormSearch.vue";
import DocumentList from "@/components/DocumentList.vue";
import { mapState } from "pinia";
import { useDocumentStore } from "@/stores/DocumentStore";
// import { useToast } from "primevue/usetoast";
// const toast = useToast();

@Options({
  components: {
    FormSearch,
    DocumentList,
  },
  // watch: {
  //   error(value) {
  //     // const toast = useToast();
  //     console.log("🚀 ~ error ~ value:", value);
  //     if (value)
  //       toast.add({
  //         severity: "error",
  //         summary: "Error Message",
  //         detail: "Message Content",
  //         life: 3000,
  //       });
  //   },
  // },
  computed: {
    ...mapState(useDocumentStore, {
      documents: "documents",
      loading: "loading",
      error: "error",
    }),
  },
})
export default class MainContent extends Vue {}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  border-radius: 10px;
  background: #fdfdfd;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  height: 574px;

  &__left {
    border-right: 1px solid #e0e0e0;
    width: 25%;
    padding: 27px 20px;
  }
  &__left,
  &__document-list,
  &__loader {
    height: 100%;
  }
  &__right {
    width: 75%;
  }
}
</style>