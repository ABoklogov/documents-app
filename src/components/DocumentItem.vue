<template>
  <div class="document-item">
    <div class="document-item__img">
      <img
        :src="document.image ? document.image : require('@/assets/not-img.png')"
        :alt="document.name"
        width="70"
      />
    </div>

    <div class="document-item__content">
      <span>{{ document.name }}</span>
      <span>12 MB</span>
    </div>
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

  &__img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
  }
  &__content {
    width: 100%;
    padding: 15px;
  }
  &__content span {
    display: block;
  }
}
</style>