<template>
  <div class="document-item">
    <span>{{ document.name }}</span>
    <div></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    document: {
      type: Object,
    },
  },
})
export default class DocumentItem extends Vue {}
</script>

<style lang="scss" scoped>
.document-item {
  display: flex;
}
</style>