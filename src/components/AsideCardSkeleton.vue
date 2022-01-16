<template>
  <el-card class="box-card" shadow="never">
    <template #header>
      <div class="skeleton-box">
        <div class="skeleton-bac-animation"></div>
        <skeleton-rect height="19px"></skeleton-rect>
      </div>
    </template>
    <div class="skeleton-box">
      <div class="skeleton-bac-animation"></div>
      <div v-for="o in 5" :key="o" class="skeleton-row">
        <skeleton-rect
          margin="4px 5px 4px 0"
          flex="3"
          height="18px"
        ></skeleton-rect>
        <skeleton-rect
          margin="4px 0 4px 5px"
          flex="1"
          height="18px"
        ></skeleton-rect>
      </div>
    </div>
  </el-card>
</template>

<script setup></script>

<style scoped lang="scss">
  @import '@/styles/skeleton.scss';
</style>
