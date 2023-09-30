<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  <MyDashboard />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
// import HelloWorld from "./components/HelloWorld.vue";
import MyDashboard from "./components/MyDashboard.vue";
// import { useDocumentStore } from "@/stores/DocumentStore";
// useDocumentStore();

@Options({
  components: {
    MyDashboard,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
