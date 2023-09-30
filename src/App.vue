<template>
  <MyDashboard />
</template>

<script>
import MyDashboard from "./components/MyDashboard.vue";

export default {
  name: "App",
  components: {
    MyDashboard,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
