<template>
  <progress-bar ref="progressBar" :percentage="20" :indeterminate="true" />
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
  import { ref } from 'vue'
  import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
  import ProgressBar from '@/components/ProgressBar.vue'

  const progressBar = ref(null)

  // onMounted(() => {
  //   progressBar.value.show()
  // })

  onBeforeRouteLeave((to, from) => {
    cosnole.log(from)
    cosnole.log(to)
    return true
  })

  //  ((to, from) => {
  //   cosnole.log(from)
  //   cosnole.log(to)
  // })
</script>

<style lang="scss" scoped></style>
