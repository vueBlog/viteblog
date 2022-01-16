<template>
  <el-container class="home">
    <el-aside width="268px">
      <aside-card-skeleton v-for="i in 3" :key="i"></aside-card-skeleton>
    </el-aside>
    <el-main class="content"></el-main>
  </el-container>
</template>

<script setup></script>

<style lang="scss" scoped>
  @import '@/styles/views/home.scss';
</style>
