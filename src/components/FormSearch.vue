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
import { defineComponent } from "vue";
import { mapActions } from "pinia";
import { useDocumentStore } from "@/stores/DocumentStore";
import { ref } from "vue";

const text = ref();

export default defineComponent({
  name: "FormSearch",
  data() {
    return {
      text,
    };
  },
  methods: {
    ...mapActions(useDocumentStore, ["getDocuments"]),
  },
});
</script>

<style lang="scss" scoped>
</style>