<template>
  <div>
    <h2>Поиск документа</h2>
    <span class="p-input-icon-right">
      <i class="pi pi-spin pi-spinner" />
      <InputText
        id="search"
        v-model="text"
        placeholder="Введите ID документа"
        type="text"
      />
    </span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions } from "pinia";
import { useDocumentStore } from "@/stores/DocumentStore";
import { ref } from "vue";

const text = ref();

@Options({
  data() {
    return {
      text,
    };
  },
  methods: {
    ...mapActions(useDocumentStore, ["getDocuments"]),
  },
})
export default class FormSearch extends Vue {}
</script>

<style lang="scss" scoped>
</style>