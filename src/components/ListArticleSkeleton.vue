<template>
  <div class="item-box skeleton-box">
    <div class="skeleton-bac-animation"></div>
    <skeleton-rect height="30px"></skeleton-rect>
    <div class="content">
      <skeleton-rect height="18px" margin="8px 0"></skeleton-rect>
      <skeleton-rect height="18px" margin="8px 0"></skeleton-rect>
      <skeleton-rect height="18px" margin="8px 0" width="50%"></skeleton-rect>
    </div>
    <div class="footer clearfix">
      <skeleton-rect width="130px"></skeleton-rect>
      <skeleton-rect width="40px" margin="0 0 0 15px"></skeleton-rect>
      <skeleton-rect width="40px" margin="0 0 0 15px"></skeleton-rect>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  @import '@/styles/components/list-article.scss';
  @import '@/styles/skeleton.scss';
  .skeleton-box:hover {
    background: #fff;
  }
  .footer {
    display: flex;
  }
</style>
