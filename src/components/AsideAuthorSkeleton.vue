<template>
  <el-collapse v-model="activeName" accordion>
    <el-collapse-item name="1">
      <template #title>
        <div class="skeleton-row skeleton-box">
          <div class="skeleton-bac-animation"></div>
          <skeleton-circle diameter="28px"></skeleton-circle>
          <skeleton-rect
            height="20px"
            margin="4px 0 0 10px"
            width="100px"
          ></skeleton-rect>
        </div>
      </template>
      <div class="author clearfix skeleton-box">
        <div class="skeleton-bac-animation"></div>
        <div class="item">
          <div class="title">
            <skeleton-rect height="19px" width="30px"></skeleton-rect>
          </div>
          <div class="number">
            <skeleton-rect
              height="19px"
              width="24px"
              margin="6px 0 0 3px"
            ></skeleton-rect>
          </div>
        </div>
        <div class="item">
          <div class="title">
            <skeleton-rect height="19px" width="30px"></skeleton-rect>
          </div>
          <div class="number">
            <skeleton-rect
              height="19px"
              width="24px"
              margin="6px 0 0 3px"
            ></skeleton-rect>
          </div>
        </div>
        <div class="item">
          <div class="title">
            <skeleton-rect height="19px" width="30px"></skeleton-rect>
          </div>
          <div class="number">
            <skeleton-rect
              height="19px"
              width="24px"
              margin="6px 0 0 3px"
            ></skeleton-rect>
          </div>
        </div>
        <div class="item">
          <div class="title">
            <skeleton-rect height="19px" width="30px"></skeleton-rect>
          </div>
          <div class="number">
            <skeleton-rect
              height="19px"
              width="24px"
              margin="6px 0 0 3px"
            ></skeleton-rect>
          </div>
        </div>
        <div class="item">
          <div class="title">
            <skeleton-rect height="19px" width="30px"></skeleton-rect>
          </div>
          <div class="number">
            <skeleton-rect
              height="19px"
              width="24px"
              margin="6px 0 0 3px"
            ></skeleton-rect>
          </div>
        </div>
      </div>
      <aside-card-skeleton></aside-card-skeleton>
    </el-collapse-item>
  </el-collapse>
</template>

<script setup>
  import { ref } from 'vue'
  const activeName = ref('1')
</script>

<style lang="scss" scoped>
  @import '@/styles/components/aside-author.scss';
  @import '@/styles/skeleton.scss';
</style>
