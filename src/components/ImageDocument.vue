<template>
  <div class="image">
    <img :src="image ? image : require('@/assets/not-img.png')" :alt="name" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ImageDocument",
  props: {
    image: {
      type: String,
    },
    name: {
      type: String,
    },
  },
});
</script>

<style lang="scss" scoped>
.image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 424px;
  height: 286px;
  border: 1px solid #e0e0e0;
}
</style>