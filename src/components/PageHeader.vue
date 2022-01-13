<template>
  <div class="header clearfix">
    <router-link to="/" class="logo-box fl">
      <img class="logo" :src="logo" alt="logo" />
      <div class="logo-text">{{ logoText }}</div>
    </router-link>
    <div class="fr clearfix">
      <el-autocomplete
        v-model="searchValue"
        class="search-box fl"
        :fetch-suggestions="querySearchAsync"
        placeholder="请输入内容"
        clearable
        size="default"
        :prefix-icon="Search"
        popper-class="autocomplete-popper"
        @select="searchHandleSelect"
      >
        <template #default="{ item }">
          <div class="option-item-box">
            <div class="name ellipsis">{{ getSearchName(item.type) }}</div>
            <div class="content ellipsis">{{ item.articleTitle }}</div>
          </div>
        </template>
      </el-autocomplete>
    </div>
  </div>
</template>

<script setup>
  import logo from '@/assets/img/logo.jpg'
  import { Search } from '@element-plus/icons-vue'
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  const router = useRouter()

  const store = useStore()
  const logoText = store.state.logoText

  // 搜索
  import { apiSearch } from '@/service/basic.js'
  const searchValue = ref('')
  async function querySearchAsync(queryString, cb) {
    if (!queryString.length) return
    const result = await apiSearch({
      queryString
    })
    cb(result?.data?.searchList || [])
  }
  function searchHandleSelect(key) {
    if ([0, 7].includes(key.type)) {
      router.push(`/detail/${key.articleId}`)
    } else if ([1, 2, 3, 4, 5, 6].includes(key.type)) {
      router.push(`/detail/${key.articleId}#${key[`h${key.type}`]}`)
    }
  }
  function getSearchName(type) {
    let res
    switch (type) {
      case 0:
        res = '文章标题'
        break
      case 1:
        res = '一级标题'
        break
      case 2:
        res = '二级标题'
        break
      case 3:
        res = '三级标题'
        break
      case 4:
        res = '四级标题'
        break
      case 5:
        res = '五级标题'
        break
      case 6:
        res = '六级标题'
        break
      case 7:
        res = '关键词'
        break
      default:
        break
    }
    return res
  }
</script>

<style lang="scss" scoped>
  @import './../styles/components/page-header.scss';
</style>

<style lang="scss">
  .search-box {
    margin: 12px 30px;
  }
  .autocomplete-popper {
    width: 600px !important;
    .el-autocomplete-suggestion__wrap {
      padding: 10px;
      max-height: none;
    }
    li {
      padding: 0 10px;
      border-left: 1px solid $border-color;
      border-right: 1px solid $border-color;
      border-bottom: 1px solid $border-color;
      &:nth-child(1) {
        border-top: 1px solid $border-color;
      }
      .option-item-box {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: left;
        .name {
          flex: 0 0 15%;
          max-width: 15%;
        }
        .content {
          box-sizing: border-box;
          padding-left: 10px;
          flex: 0 0 85%;
          max-width: 85%;
          border-left: 1px solid $border-color;
        }
      }
    }
  }
</style>
