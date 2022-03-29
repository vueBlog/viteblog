<template>
  <el-container class="home">
    <el-aside width="268px">
      <template v-if="aside.loading">
        <aside-card-skeleton v-for="i in 3" :key="i"></aside-card-skeleton>
      </template>
      <template v-else-if="!aside.list.length && !aside.loading">
        <div class="no-data">暂无数据</div>
      </template>
      <template v-else>
        <aside-card
          v-for="item in aside.list"
          :key="item.type"
          :card-type="item.type"
          :title="item.title"
          :info="item.info"
        ></aside-card>
      </template>
    </el-aside>
    <el-main class="content">
      <div class="content-header clearfix">
        <el-checkbox v-model="list.justOriginal" @change="toJustOriginal">
          仅看原创
        </el-checkbox>
        <div class="content-header_select fr">
          <span>文章排序：</span>
          <el-select
            v-model="list.order"
            placeholder="请选择"
            @change="orderChange"
          >
            <el-option
              v-for="item in list.headerSelect"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
      <div class="content-list">
        <template v-if="list.loading">
          <list-article-skeleton
            v-for="i in 5"
            :key="i"
          ></list-article-skeleton>
        </template>
        <template v-else-if="!list.articleList.length && !list.loading">
          <div class="no-data">暂无数据</div>
        </template>
        <template v-else>
          <list-article
            v-for="item in list.articleList"
            :key="item.articleId"
            :info="item"
          ></list-article>
        </template>
      </div>
      <div v-if="list.total" class="content-footer">
        <el-pagination
          background
          hide-on-single-page
          layout="prev, pager, next"
          :total="list.total"
          :page-size="list.limit"
          :current-page="list.page"
          class="pagination-center"
          @current-change="handleCurrentChange"
        ></el-pagination>
      </div>
    </el-main>
  </el-container>
</template>

<script setup>
  import { reactive, watch } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import { useStore } from 'vuex'
  import { useTitle } from '@vueuse/core'
  import getAsideEvent from './../utils/aside'
  import getArticleEvent from './../utils/article'

  const router = useRouter()
  const route = useRoute()
  const store = useStore()

  useTitle(`首页 | ${import.meta.env.VITE_title}`)

  const aside = reactive({
    loading: true,
    list: []
  })
  getAsideEvent(route, store).then(res => {
    Object.assign(aside, res)
  })

  const list = reactive({
    headerSelect: [
      {
        value: 0,
        label: '默认'
      },
      {
        value: 1,
        label: '按访问量'
      },
      {
        value: 2,
        label: '按点赞数'
      }
    ],
    justOriginal: false,
    order: 0,
    articleList: [],
    total: 0,
    limit: 10,
    page: 1,
    dateTime: '',
    columnId: '',
    author: '',
    loading: true
  })
  getArticleEvent(route, store).then(res => {
    Object.assign(list, res)
  })

  watch(
    route,
    () => {
      list.loading = true
      document.body.scrollTop = document.documentElement.scrollTop = 0
      getArticleEvent(route, store).then(res => {
        Object.assign(list, res)
      })
    },
    {
      deep: true
    }
  )

  const toJustOriginal = val => {
    router.push({
      path: route.path,
      query: {
        ...route.query,
        original: val,
        page: 1
      }
    })
  }
  const orderChange = val => {
    router.push({
      path: route.path,
      query: {
        ...route.query,
        order: val,
        page: 1
      }
    })
  }
  const handleCurrentChange = val => {
    router.push({
      path: route.path,
      query: {
        ...route.query,
        page: val
      }
    })
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/views/home.scss';
</style>
