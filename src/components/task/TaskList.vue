<script>
import {defineComponent} from 'vue'
import {mapActions, mapGetters} from "vuex";
import TaskItem from "./TaskItem.vue";


export default defineComponent({
  name: "TaskList",
  components: {
    TaskItem
  },
  methods: {
    ...mapActions({
      initializeStore: 'task/initializeStore',
    }),
  },
  computed: {
    ...mapGetters({
      tasks: 'task/tasks',
    })
  },
  mounted() {
    this.initializeStore();
  }
})
</script>

<template>
  <ul class="task__list" v-if="tasks.length">
    <TaskItem
      v-for="(task, index) in tasks"
      :key="index"
      :task="task"
      :index="index"
    />
  </ul>
  <div class="task__list-empty" v-else>
    Список пуст
  </div>
</template>

<style scoped>

</style>
