<template>
  <BaseContainer>
    <MyHeader />
    <MainContent />
  </BaseContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainContent from "@/components/MainContent.vue";
import MyHeader from "@/components/MyHeader.vue";
import BaseContainer from "@/components/BaseContainer.vue";
import { mapActions } from "pinia";
import { useDocumentStore } from "@/stores/DocumentStore";

export default defineComponent({
  name: "MyDashboard",
  components: {
    MainContent,
    MyHeader,
    BaseContainer,
  },
  mounted() {
    this.getDocuments();
  },
  methods: {
    ...mapActions(useDocumentStore, ["getDocuments"]),
  },
});
</script>

<style lang="scss" scoped>
</style>