<template>
  <div class="document-item">
    <div class="document-item__img">
      <img
        :src="document.image ? document.image : require('@/assets/not-img.png')"
        :alt="document.name"
        width="70"
      />
    </div>

    <div class="document-item__content" :style="styleContent">
      <span class="document-item__content-name" :style="styleName">
        {{ document.name }}
      </span>
      <span :style="styleText">12 MB</span>
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
    currentDocument: {
      type: Object,
    },
  },
  computed: {
    styleContent() {
      return this.document?.id === this.currentDocument?.id
        ? "background-color: #0D6EFD"
        : null;
    },
    styleName() {
      return this.document?.id === this.currentDocument?.id
        ? "color: #fff"
        : "color: #000";
    },
    styleText() {
      return this.document?.id === this.currentDocument?.id
        ? "color: #fff"
        : "color: #6c757d";
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
    background-color: #fff;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  &__content {
    width: 100%;
    padding: 15px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  &__content span {
    display: block;
  }
  &__content-name {
    margin-bottom: 6px;
  }
}
</style>