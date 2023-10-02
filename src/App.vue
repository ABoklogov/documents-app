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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
