<!-- <template>
  <div class="form-search">
    <h2 class="form-search__title">Поиск документа</h2>
    <span class="p-input-icon-right form-search__input-box">
      <i v-if="loading" class="pi pi-spin pi-spinner" />
      <InputText
        id="search"
        v-model="text"
        placeholder="Введите ID документа"
        type="text"
        class="form-search__input"
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
.form-search {
  &__title {
    margin: 0;
  }
  &__input-box {
    margin-top: 14px;
  }
  &__input {
    border-radius: 8px;
    border: 1.5px solid #e9ecef;
    width: 100%;
  }
}
@media screen and (min-width: 320px) {
  .form-search {
    &__title {
      font-size: 14px;
    }
    &__input-box {
      width: 100%;
    }
    &__input {
      font-size: 12px;
      padding: 12px 18px;
    }
  }
}
@media screen and (min-width: 1100px) {
  .form-search {
    &__title {
      font-size: 16px;
    }
    &__input {
      font-size: 14px;
      padding: 16px 24px;
      width: 240px;
    }
  }
}
</style> -->