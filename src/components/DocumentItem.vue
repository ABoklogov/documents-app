<template>
  <div class="document-item">
    <span>{{ document.name }}</span>
    <div></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DocumentItem",
  props: {
    document: {
      type: Object,
    },
  },
});
</script>

<style lang="scss" scoped>
.document-item {
  display: flex;
}
</style>