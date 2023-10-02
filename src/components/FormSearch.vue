<template>
  <div>
    <h2>Поиск документа</h2>
    <span class="p-input-icon-right">
      <i v-if="loading" class="pi pi-spin pi-spinner" />
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
import { mapActions, mapState } from "pinia";
import { useDocumentStore } from "@/stores/DocumentStore";
import { ref, Ref } from "vue";

const text = ref();

declare interface State {
  text: Ref;
  timer: number | undefined;
}

export default defineComponent({
  name: "FormSearch",
  data(): State {
    return {
      text,
      timer: undefined,
    };
  },
  watch: {
    text(query) {
      clearTimeout(this.timer);

      this.timer = setTimeout(() => this.searchDocuments(query), 800);
    },
  },
  computed: {
    ...mapState(useDocumentStore, { loading: "loadingSearch" }),
  },
  methods: {
    ...mapActions(useDocumentStore, ["searchDocuments"]),
  },
});
</script>

<style lang="scss" scoped>
</style>