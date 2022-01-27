<template>
  <el-card class="box-card" shadow="never">
    <template #header>
      <span>{{ title }}</span>
    </template>
    <div v-for="item in info" :key="item.id" class="box-card_item">
      <template v-if="[2, 4].includes(cardType)">
        <router-link
          class="box-card_item-link clearfix"
          :to="`${getTo}${item.id}`"
        >
          <span class="sub-title fr">{{ item.num }} {{ subTitle }}</span>
          <div class="title ellipsis" :title="item.title">{{ item.title }}</div>
        </router-link>
      </template>
      <template v-else>
        <a
          class="box-card_item-link clearfix"
          target="_blank"
          :href="`${getTo}${item.id}`"
        >
          <span class="sub-title fr">{{ item.num }} {{ subTitle }}</span>
          <div class="title ellipsis" :title="item.title">{{ item.title }}</div>
        </a>
      </template>
    </div>
  </el-card>
</template>

<script setup>
  import { computed } from 'vue'
  const props = defineProps({
    title: {
      type: String,
      default: ''
    },
    cardType: {
      type: Number,
      default: 1
    },
    info: {
      type: Array,
      default: () => []
    }
  })
  const subTitle = computed(() => {
    let res
    switch (props.cardType) {
      case 1:
      case 3:
        res = 'views'
        break
      case 2:
      case 4:
        res = '篇'
        break
      default:
        break
    }
    return res
  })
  const getTo = computed(() => {
    let res
    switch (props.cardType) {
      case 1:
      case 3:
        res = `${import.meta.env.VITE_detailPath}/detail/`
        break
      case 2:
        res = '/list?columnId='
        break
      case 4:
        res = '/list?dateTime='
        break
      default:
        break
    }
    return res
  })
</script>

<style scoped lang="scss">
  @import './../styles/components/aside-card.scss';
</style>
