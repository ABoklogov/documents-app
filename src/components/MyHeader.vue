<template>
  <div class="header">
    <h1 class="header__title">Dashboard</h1>
    <span class="header__user-name">Username</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyHeader",
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  &__title {
    font-weight: 700;
    margin: 0;
    color: #000;
  }
}
@media screen and (min-width: 320px) {
  .header {
    &__title {
      font-size: 20px;
    }
    &__user-name {
      font-size: 12px;
    }
  }
}
@media screen and (min-width: 600px) {
  .header {
    padding: 30px 0;
    &__title {
      font-size: 24px;
    }
    &__user-name {
      font-size: 14px;
    }
  }
}
@media screen and (min-width: 1100px) {
  .header {
    padding: 35px 0;
    &__title {
      font-size: 32px;
    }
    &__user-name {
      font-size: 16px;
    }
  }
}
</style>