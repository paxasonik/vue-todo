<script>
import {defineComponent} from 'vue'
import Modal from "../UI/Modal.vue";
import FormInput from "../UI/FormInput.vue";
import {NameModal} from "./constants";

export default defineComponent({
  name: "EditTask",
  components: {
    FormInput,
    Modal
  },
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
  data() {
    return {
      isModalVisible: false,
      nameTask: '',
      NameModal,
    }
  },
  computed: {
    isCompletedForm () {
      return !this.nameTask || this.nameTask === this.task
    }
  },
  methods: {
    showModal() {
      this.nameTask = this.task
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false;
    },
    editTask() {
      this.$store.commit('task/EDIT_TASK', [this.index, this.nameTask]);
      this.closeModal()
    }
  },
})
</script>

<template>
  <div class="edit-task">
    <button class="btn" @click="showModal">
      Редактировать
    </button>
    <Modal
      v-show="isModalVisible"
      :titleModal="NameModal.EDIT"
      @closeModal="closeModal"
    >
      <div class="edit-task__content modal__content">
        <FormInput
          type="text"
          placeholder="Название задачи"
          :value.sync="nameTask"
        />
      </div>
      <div class="edit-task__footer modal__footer">
        <button class="btn" @click="editTask" :disabled="isCompletedForm">
          Редактировать
        </button>
      </div>
    </Modal>
  </div>
</template>

<style scoped>

</style>
