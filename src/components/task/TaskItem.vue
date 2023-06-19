<script>
import {defineComponent} from 'vue'
import EditTask from "../modal/EditTask.vue";

export default defineComponent({
  name: "TaskItem",
  components: {EditTask},
  props: {
    task: {
      type: String,
      default: '',
    },
    index: {
      type: Number,
      default: 0,
    }
  },
  methods: {
    deleteTask() {
      this.$store.commit('task/DELETE_TASK', this.task);
    },
  }
})
</script>

<template>
  <li class="task__item">
    <span>
      {{task}}
    </span>
    <div class="">
      <button class="btn" @click="deleteTask">
        Удалить
      </button>
      <EditTask :task="task" :index="index"/>
    </div>
  </li>
</template>

<style scoped>

</style>
