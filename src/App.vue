<template>
  <el-container>
    <el-header v-if="layoutShow" class="header-box">
      <page-header></page-header>
    </el-header>
    <el-main class="layout-box">
      <router-view></router-view>
    </el-main>
    <el-footer v-if="layoutShow" class="layout-footer" height="120px">
      <page-footer></page-footer>
    </el-footer>
  </el-container>
</template>

<script setup>
  import { ref, onMounted, computed } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import { useNProgress } from '@vueuse/integrations/useNProgress'
  import './styles/NProgress.scss'

  const router = useRouter()
  const route = useRoute()

  // 是否显示头部底部，在编辑页面不显示
  const layoutShow = computed(() => !/\/editor\/?\d*/.test(route.path))

  onMounted(() => {})

  // 头部加载条
  const { isLoading } = useNProgress()
  router.beforeEach((to, from) => {
    isLoading.value = !isLoading.value
    return true
  })
  router.afterEach((to, from) => {
    isLoading.value = !isLoading.value
  })
</script>

<style lang="scss">
  #app {
    padding: 0 20px;
    min-width: 1000px;
    .header-box {
      position: sticky;
      left: 0;
      top: 0;
      z-index: 100;
      padding: 0;
      background: #fff;
    }
    .layout-box {
      padding: 20px 0;
    }
    .layout-footer {
      padding: 0;
    }
  }
</style>
