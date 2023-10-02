<template>
  <div class="document-card">
    <ImageDocument :image="document.image" :name="document.name" />
    {{ document.name }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ImageDocument from "@/components/ImageDocument.vue";

export default defineComponent({
  name: "DocumentCard",
  components: {
    ImageDocument,
  },
  props: {
    document: {
      type: Object,
    },
  },
});
</script>

<style lang="scss" scoped>
</style>