<template>
  <BaseContainer>
    <MyHeader />
    <MainContent />
  </BaseContainer>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MainContent from "@/components/MainContent.vue";
import MyHeader from "@/components/MyHeader.vue";
import BaseContainer from "@/components/BaseContainer.vue";
import { mapActions } from "pinia";
import { useDocumentStore } from "@/stores/DocumentStore";

@Options({
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
})
export default class MyDashboard extends Vue {}
</script>

<style lang="scss" scoped>
</style>