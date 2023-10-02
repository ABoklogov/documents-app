<template>
  <ul class="document-list" v-for="document in documents" :key="document.id">
    <li>
      <DocumentItem :document="document" />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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
});
</script>

<style lang="scss" scoped>
</style>