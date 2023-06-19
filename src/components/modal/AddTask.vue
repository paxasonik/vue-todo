<script>
import {defineComponent} from 'vue'
import Modal from "../UI/Modal.vue";
import FormInput from "../UI/FormInput.vue";

export default defineComponent({
  name: "AddTask",
  components: {
    FormInput,
    Modal
  },
  data() {
    return {
      isModalVisible: false,
      nameTask: '',
      NameModal: "Добавить задачу",
    }
  },
  computed: {
    isCompletedForm () {
      return !this.nameTask
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.nameTask = ''
      this.isModalVisible = false;
    },
    addTask() {
      this.closeModal()
    }
  },
})
</script>

<template>
  <div class="add-task">
    <button class="btn" @click="showModal">
      Добавить
    </button>
    <Modal
      v-show="isModalVisible"
      :titleModal="NameModal"
      @closeModal="closeModal"
    >
      <div class="add-task__content">
        <FormInput
          type="text"
          placeholder="Название задачи"
          :value.sync="nameTask"
        />
      </div>
      <div class="add-task__footer">
        <button class="btn" @click="addTask" :disabled="isCompletedForm">
          Сохранить
        </button>
      </div>
    </Modal>
  </div>
</template>

<style scoped>

</style>
