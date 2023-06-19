<script>
import {defineComponent} from 'vue'
import {Emit, DefaultProps} from "./constants";

export default defineComponent({
  name: "Modal",
  props: {
    titleModal: {
      type: String,
      default: DefaultProps.TITLE_MODAL,
    },
  },
  methods: {
    closeModal() {
      this.$emit(Emit.CLOSE_MODAL);
    },
  },
})
</script>

<template>
  <div class="modal modal__bg" @click="closeModal">
    <div class="modal__wrap" @click.stop>
      <div class="modal__header">
        <h3 class="modal__header-title">{{ titleModal }}</h3>
        <button @click="closeModal" class="modal__header-close"/>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>

</style>
