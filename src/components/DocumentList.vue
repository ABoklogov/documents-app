<template>
  <ul class="document-list" v-for="document in documents" :key="document.id">
    <li>
      <DocumentItem :document="document" />
    </li>
  </ul>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import DocumentItem from "@/components/DocumentItem.vue";

@Options({
  components: {
    DocumentItem,
  },
  props: {
    documents: {
      type: Array,
    },
  },
})
export default class DocumentList extends Vue {}
</script>

<style lang="scss" scoped>
</style>