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
  border: 1px solid #e0e0e0;
}

@media screen and (min-width: 320px) {
  .image {
    width: 100%;
    height: auto;

    & img {
      max-width: 100%;
    }
  }
}
@media screen and (min-width: 600px) {
  .image {
    height: 330px;
  }
}
@media screen and (min-width: 1100px) {
  .image {
    width: 424px;
    height: 286px;

    & img {
      max-width: initial;
    }
  }
}
</style>