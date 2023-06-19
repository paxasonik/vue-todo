<script>
import {defineComponent} from 'vue'
import TaskItem from "./TaskItem.vue";

export default defineComponent({
  name: "TaskList",
  components: {TaskItem}
})
</script>

<template>
  <ul class="task__list">
    <TaskItem></TaskItem>
  </ul>
</template>

<style scoped>

</style>
