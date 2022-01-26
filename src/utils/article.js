import { apiArticleList } from '@/service/article.js'

export default async function getArticleEvent(route, store) {
  const page = route.query.page * 1 || 1
  const justOriginal = route.query.original
    ? route.query.original === 'true'
    : false
  const order = route.query.order * 1 || 0
  const dateTime = route.query.dateTime
  const author = route.query.author || 'admin'
  const columnId = route.query.columnId
  const limit = import.meta.env.VITE_listLimit
    ? import.meta.env.VITE_listLimit * 1
    : 10
  let loading = false
  let articleList = []
  let total = 0

  let query = {
    limit,
    page,
    justOriginal,
    order,
    dateTime,
    columnId
  }
  if (route.name === 'about') {
    query.author = author
  }
  loading = true
  let result = await apiArticleList(query)
  loading = false
  if (result.isok) {
    articleList = result.data.list
    total = result.data.total
  }
  return {
    limit,
    page,
    justOriginal,
    order,
    dateTime,
    columnId,
    loading,
    articleList,
    total
  }
}
