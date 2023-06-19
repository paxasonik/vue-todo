<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Header"
})
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__row">
        <router-link :to="{name: 'Main'}" class="header__logo">
          Logo
        </router-link>
        <ul class="header__list">
          <li class="header__item">
            <router-link :to="{name: 'Main'}">
              Главная
            </router-link>
          </li>
          <li class="header__item">
            <router-link :to="{name: 'Tasks'}">
              Список задач
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>
