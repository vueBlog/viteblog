<template>
  <div class="item-box">
    <a class="header" target="_blank" :href="articleLink">
      <el-tag class="header-icon">{{ articleType }}</el-tag>
      <h2>{{ info.articleTitle }}</h2>
    </a>
    <a class="content" target="_blank" :href="articleLink">
      {{ info.articleSubTitle }}...
    </a>
    <div class="footer clearfix">
      <div class="footer-item">
        {{ articleCreateTime }}
      </div>
      <div class="footer-line"></div>
      <div class="footer-item">
        views
        <span>{{ info.articleView }}</span>
      </div>
      <div class="footer-line"></div>
      <div class="footer-item">
        stars
        <span>{{ info.articleStart }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import dayjs from 'dayjs'

  const props = defineProps({
    info: {
      type: Object,
      default: () => {}
    }
  })

  const articleCreateTime = computed(() => {
    return dayjs(props.info.articleCreateTime).format('YYYY-MM-DD HH:mm:ss')
  })

  const articleType = computed(() => {
    let result
    switch (props.info.articleNature) {
      case 0:
        result = '原创'
        break
      case 1:
        result = '转载'
        break
      case 2:
        result = '翻译'
        break
      default:
        result = '原创'
        break
    }
    return result
  })

  const articleLink = computed(() => {
    return `${import.meta.env.VITE_detailPath}/detail/${props.info.articleId}`
  })
</script>

<style scoped lang="scss">
  @import './../styles/components/list-article.scss';
</style>
