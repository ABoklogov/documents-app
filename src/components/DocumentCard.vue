<template>
  <div class="document-card">
    <ImageDocument :image="document.image" :name="document.name" />
    <div class="document-card__content">
      <div class="document-card__top">
        <h2>{{ document.name }}</h2>
        <div class="document-card__buttons">
          <PrimeButton
            label="Скачать"
            severity="info"
            outlined
            @click="downloadDocument(document.name, document.description)"
          />
          <PrimeButton
            label="Удалить"
            severity="danger"
            outlined
            class="danger-btn"
            :disabled="document.image ? false : true"
            @click="deleteDocument(document.id)"
          />
        </div>
      </div>
      <div class="document-card__discription">
        <span>Описание:</span>
        <p>{{ document.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ImageDocument from "@/components/ImageDocument.vue";
import { mapActions } from "pinia";
import { useDocumentStore } from "@/stores/DocumentStore";

export default defineComponent({
  name: "DocumentCard",
  components: {
    ImageDocument,
  },
  props: {
    document: {
      type: Object,
    },
  },
  methods: {
    ...mapActions(useDocumentStore, ["deleteDocument"]),
    downloadDocument(name: string, description: string) {
      const text = `${name}: ${description}`;

      let el = document.createElement("a");
      el.setAttribute(
        "href",
        `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`
      );
      el.setAttribute("download", "text.txt");
      el.style.display = "none";
      document.body.appendChild(el);
      el.click();
      document.body.removeChild(el);
    },
  },
});
</script>

<style lang="scss" scoped>
.document-card {
  display: flex;
  align-items: flex-start;

  &__content {
    margin-left: 61px;
  }
  &__discription {
    margin-top: 47px;
  }
}
.danger-btn {
  margin-left: 17px;
}
</style>