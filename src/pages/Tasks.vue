<script>
import {defineComponent} from 'vue'
import AddTask from "../components/modal/AddTask.vue";
import TaskList from "../components/task/TaskList.vue";

export default defineComponent({
  name: "Tasks",
  components: {
    TaskList,
    AddTask
  },
})
</script>

<template>
  <section class="content">
    <div class="container">
      <div class="task__row">
        <h1>
          Список задач
        </h1>
        <AddTask/>
      </div>
      <TaskList/>
    </div>
  </section>
</template>

<style scoped>

</style>
