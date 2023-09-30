<template>
  <div>
    <span class="p-input-icon-left">
      <i class="pi pi-search" />
      <InputText id="search" v-model="text" placeholder="Search" type="text" />
    </span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapState, mapActions } from "pinia";
import { useDocumentStore } from "@/stores/DocumentStore";
import { ref } from "vue";

const text = ref();

@Options({
  data() {
    return {
      text: text,
    };
  },
  mounted() {
    this.getDocuments();
  },
  computed: {
    ...mapState(useDocumentStore, ["documents"]),
  },
  methods: {
    ...mapActions(useDocumentStore, ["getDocuments"]),
  },
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
</style>