<script>
import {defineComponent} from 'vue'
import Modal from "../UI/Modal.vue";
import FormInput from "../UI/FormInput.vue";
import {NameModal} from "./constants";

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
      NameModal,
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
      this.$store.commit('task/ADD_TASK', this.nameTask);
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
      :titleModal="NameModal.ADD"
      @closeModal="closeModal"
    >
      <div class="add-task__content modal__content">
        <FormInput
          type="text"
          placeholder="Название задачи"
          :value.sync="nameTask"
        />
      </div>
      <div class="add-task__footer modal__footer">
        <button class="btn" @click="addTask" :disabled="isCompletedForm">
          Сохранить
        </button>
      </div>
    </Modal>
  </div>
</template>

<style scoped>

</style>
