<template>
  <el-container class="home">
    <el-aside width="268px">
      <aside-author-skeleton v-if="aside.loading"></aside-author-skeleton>
      <template v-else-if="!aside.list.length && !aside.loading">
        <div class="no-data">暂无数据</div>
      </template>
      <el-collapse
        v-else
        :model-value="activeName"
        accordion
        @change="collapseChange"
      >
        <el-collapse-item
          v-for="(author, index) in aside.list"
          :key="index"
          :name="author.authorId"
        >
          <template #title>
            <el-avatar
              class="author-img"
              :size="28"
              :src="getAuthorImg(author)"
            ></el-avatar>
            <span class="author-name ellipsis">{{ author.authorName }}</span>
          </template>
          <aside-author :info="author"></aside-author>
          <aside-card
            v-if="author.asideArticle"
            :card-type="author.asideArticle.type"
            :title="author.asideArticle.title"
            :info="author.asideArticle.info"
          ></aside-card>
        </el-collapse-item>
      </el-collapse>
    </el-aside>
    <el-main class="content">
      <div v-if="currentAuthor.authorIntroduce" class="author-info">
        <span>作者简介：</span>
        {{ currentAuthor.authorIntroduce }}
      </div>
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
  import { ref, reactive, watch, computed } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import { useStore } from 'vuex'
  import { useTitle } from '@vueuse/core'
  import getAsideEvent from './../utils/aside'
  import getArticleEvent from './../utils/article'

  const router = useRouter()
  const route = useRoute()
  const store = useStore()

  useTitle(`关于 | ${import.meta.env.VITE_title}`)

  const aside = reactive({
    loading: true,
    list: []
  })
  getAsideEvent(route, store).then(res => {
    aside.loading = res.loading
    aside.list = res.list
  })

  const activeName = computed(() => {
    return route.query.author * 1 || aside.list[0].authorId
  })
  const currentAuthor = reactive({})
  function getCurrentAuthor() {
    if (aside.list.length) {
      Object.assign(
        currentAuthor,
        aside.list.filter(item => item.authorId === activeName.value)[0]
      )
    }
  }
  watch(
    aside,
    () => {
      getCurrentAuthor()
    },
    {
      deep: true
    }
  )
  const collapseChange = value => {
    router.push({
      path: route.path,
      query: {
        ...route.query,
        author: value
      }
    })
  }
  const getAuthorImg = author => {
    return author.authorHeadimg
      ? author.authorHeadimg
      : 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
  }

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
      getCurrentAuthor()
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

  .author-img {
    min-width: 28px;
  }
  .author-name {
    margin-left: 10px;
  }
  .author-info {
    padding: 0 15px;
    font-size: 14px;
    color: $theme-color;
    span {
      color: $theme-light-color;
    }
  }
</style>
