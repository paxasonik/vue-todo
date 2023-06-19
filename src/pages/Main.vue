<script>
import {defineComponent} from 'vue'
import Header from "../components/Header.vue";


export default defineComponent({
  name: "Main",
  components: {
    Header
  }
})
</script>

<template>
  <div class="main__page">
    <Header/>
    <section class="content">
      <div class="container">
        <h1>
          Главная страница
        </h1>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>
