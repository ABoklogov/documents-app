<template>
  <div class="document-list-wrapper">
    <h2>Результаты</h2>
    <ul class="document-list">
      <li
        v-for="document in documents"
        :key="document.id"
        class="document-list__item"
        @click="changeDocument(document)"
      >
        <DocumentItem :document="document" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "pinia";
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
  methods: {
    ...mapActions(useDocumentStore, ["changeDocument"]),
  },
});
</script>

<style lang="scss" scoped>
.document-list-wrapper {
  height: 100%;
}
.document-list {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 620px;
  overflow: auto;

  &__item {
    background: #fff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    margin-bottom: 18px;
    margin-right: 16px;
  }
}
</style>