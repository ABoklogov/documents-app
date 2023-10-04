<template>
  <div class="document-list-wrapper">
    <h2 class="document-list-wrapper__title">Результаты</h2>
    <ul v-if="documents.length > 0" class="document-list">
      <li
        v-for="document in documents"
        :key="document.id"
        class="document-list__item"
        @click="changeDocument(document)"
      >
        <DocumentItem :document="document" :currentDocument="currentDocument" />
      </li>
    </ul>
    <span v-else class="document-list-wrapper__text">Ничего не найдено</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "pinia";
import { useDocumentStore } from "@/stores/DocumentStore";
import DocumentItem from "@/components/DocumentItem.vue";

export default defineComponent({
  name: "DocumentList",
  components: {
    DocumentItem,
  },
  props: {
    documents: {
      type: Array,
    },
  },
  computed: {
    ...mapState(useDocumentStore, { currentDocument: "currentDocument" }),
  },
  methods: {
    ...mapActions(useDocumentStore, ["changeDocument"]),
  },
});
</script>

<style lang="scss" scoped>
.document-list-wrapper {
  height: 100%;

  &__title {
    margin: 0;
  }
  &__text {
    display: block;
    margin-top: 14px;
  }
}
.document-list {
  list-style: none;
  margin: 0;
  margin-top: 14px;
  padding: 0;
  overflow: auto;

  &__item {
    background-color: #fff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 18px;
    margin-right: 16px;

    &:hover {
      box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);
    }
  }
}
@media screen and (min-width: 320px) {
  .document-list-wrapper__title {
    font-size: 14px;
  }
  .document-list {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 290px;
    overflow-y: hidden;
    overflow-x: auto;
  }
}
@media screen and (min-width: 1100px) {
  .document-list-wrapper__title {
    font-size: 16px;
  }
  .document-list {
    flex-wrap: nowrap;
    height: 620px;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>