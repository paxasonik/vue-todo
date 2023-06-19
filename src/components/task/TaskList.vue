<script>
import {defineComponent} from 'vue'
import {mapGetters} from "vuex";
import TaskItem from "./TaskItem.vue";

export default defineComponent({
  name: "TaskList",
  components: {
    TaskItem
  },
  computed: {
    ...mapGetters({
      tasks: 'task/tasks',
    })
  }
})
</script>

<template>
  <ul class="task__list">
    <TaskItem
      v-for="(task, index) in tasks"
      :key="task"
      :task="task"
      :index="index"
    />
  </ul>
</template>

<style scoped>

</style>
