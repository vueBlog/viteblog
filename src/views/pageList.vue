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
      <template v-if="columnInfo && columnInfo.columnTitle">
        <div class="row ellipsis">专栏名称： {{ columnInfo.columnTitle }}</div>
        <div class="row ellipsis">
          专栏介绍： {{ columnInfo.columnContent }}
        </div>
        <div class="row ellipsis">文章总数： {{ columnInfo.columnNumber }}</div>
        <div style="border-top: 1px solid #e6e6e6"></div>
      </template>
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

  const router = useRouter()
  const route = useRoute()
  const store = useStore()

  import { useTitle } from '@vueuse/core'
  useTitle(`归档 | ${import.meta.env.VITE_title}`)

  import getAsideEvent from './../utils/aside'
  const aside = reactive({
    loading: true,
    list: []
  })
  getAsideEvent(route, store).then(res => {
    Object.assign(aside, res)
  })

  import getArticleEvent from './../utils/article'
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

  import { apiColumnDetail } from './../service/article'
  const columnInfo = reactive({
    columnContent: '',
    columnId: 0,
    columnNumber: 0,
    columnTitle: '',
    time: ''
  })
  async function apiColumnDetailMethod() {
    let result = await apiColumnDetail({
      id: route.query.columnId
    })
    if (result.isok) {
      Object.assign(columnInfo, result.data)
    }
  }
  apiColumnDetailMethod()
  watch(
    route,
    () => {
      apiColumnDetailMethod()
    },
    {
      deep: true
    }
  )
</script>

<style lang="scss" scoped>
  @import '@/styles/views/home.scss';
  .row {
    margin: 15px 0;
  }
</style>
