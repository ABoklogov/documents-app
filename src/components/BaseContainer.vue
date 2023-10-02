<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseContainer",
});
</script>

<style lang="scss" scoped>
.container {
  max-width: 1266px;
  margin: 0 auto;
}
</style>