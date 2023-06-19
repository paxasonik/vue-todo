<script>
import {defineComponent} from 'vue'
import {Emit, DefaultProps} from "./constants";

export default defineComponent({
  name: "FormInput",
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: DefaultProps.TEXT
    },
    placeholder: {
      type: String,
      default: ''
    },
  },
  computed: {
    dataValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit(Emit.UPDATE_VALUE, value);
      }
    }
  },
})
</script>

<template>
  <input
    class="input"
    :type="type"
    v-model="dataValue"
    :placeholder="placeholder"
  />
</template>

<style scoped>

</style>
