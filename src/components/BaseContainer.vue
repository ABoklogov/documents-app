<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class BaseContainer extends Vue {}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1266px;
  margin: 0 auto;
}
</style>