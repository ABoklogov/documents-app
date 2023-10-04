<template>
  <div class="document-card">
    <ImageDocument :image="document.image" :name="document.name" />
    <div class="document-card__content">
      <div class="document-card__top">
        <h2 class="document-card__name">{{ document.name }}</h2>
        <div class="document-card__buttons">
          <PrimeButton
            label="Скачать"
            severity="info"
            outlined
            class="document-card__btn"
            @click="downloadDocument(document.name, document.description)"
          />
          <PrimeButton
            label="Удалить"
            severity="danger"
            outlined
            class="document-card__btn document-card__btn--danger"
            :disabled="!document.image"
            @click="deleteDocument(document.id)"
          />
        </div>
      </div>
      <div class="document-card__discription">
        <span class="document-card__discription-title">Описание:</span>
        <span class="document-card__discription-text">{{
          document.description
        }}</span>
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
  &__name {
    margin: 0;
  }
  &__buttons {
    margin-top: 14px;
  }
  &__btn {
    border-radius: 8px;
  }
  &__btn--danger {
    margin-left: 17px;
  }
  &__discription-title {
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    color: #000;
  }
  &__discription-text {
    display: block;
    margin-top: 14px;
  }
}
@media screen and (min-width: 320px) {
  .document-card {
    flex-direction: column;
    &__top {
      margin-top: 14px;
    }
    &__name {
      font-size: 14px;
    }
    &__discription {
      margin-top: 20px;
    }
    &__discription-title {
      font-size: 14px;
    }
  }
}

@media screen and (min-width: 1100px) {
  .document-card {
    flex-direction: row;
    align-items: flex-start;
    &__top {
      margin-top: 0;
    }
    &__name {
      font-size: 16px;
    }
    &__content {
      margin-left: 61px;
    }
    &__discription {
      margin-top: 47px;
    }
    &__discription-title {
      font-size: 16px;
    }
  }
}
</style>