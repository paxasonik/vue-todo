<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TaskItem"
})
</script>

<template>
  <li class="task__item">
    <span>
      Задача 1
    </span>
    <div class="">
      <button class="btn">
        Удалить
      </button>
      <button class="btn">
        Редактировать
      </button>
    </div>
  </li>
</template>

<style scoped>

</style>
