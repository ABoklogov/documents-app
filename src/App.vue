<template>
  <MyDashboard />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyDashboard from "@/components/MyDashboard.vue";

export default defineComponent({
  name: "App",
  components: {
    MyDashboard,
  },
});
</script>

<style>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #6c757d;
}
h2 {
  color: #000;
}
</style>
