<template>
  <ul>
    <li class="link">
      home
      <el-link type="primary">primary</el-link>
      <router-link to="/home">home</router-link>
    </li>
    <li>
      home
      <router-link to="/list">list</router-link>
    </li>
    <li>
      <router-link to="/about">about</router-link>
    </li>
  </ul>
  <el-button type="primary">Primary</el-button>
  <router-view />
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import { useNProgress } from '@vueuse/integrations/useNProgress'
  import './styles/NProgress.scss'

  const { isLoading } = useNProgress()
  const router = useRouter()

  onMounted(() => {})

  router.beforeEach((to, from) => {
    isLoading.value = !isLoading.value
    return true
  })
  router.afterEach((to, from) => {
    isLoading.value = !isLoading.value
  })
</script>

<style lang="scss">
  html,
  body {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
