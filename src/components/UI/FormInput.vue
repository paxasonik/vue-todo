<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "FormInput",
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
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
        this.$emit('update:value', value);
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
