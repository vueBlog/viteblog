export default async function getAsideEvent(route, store) {
  let loading = false
  let list = []
  if (['/home', '/list'].includes(route.path)) {
    if (!store.state.asideStore.aside.length) {
      loading = true
      await store.dispatch('asideStore/apigetAsideMethod')
    }
    loading = false
    let asideList = store.state.asideStore.aside
    if (route.path === '/list') {
      asideList = asideList.filter(item => [2, 4].includes(item.type))
    }
    return {
      loading,
      list: asideList
    }
  } else if (route.path === '/about') {
    if (!store.state.asideStore.asideAuthor.length) {
      loading = true
      await store.dispatch('asideStore/apigetAsideAuthorMethod')
    }
    loading = false
    return {
      loading,
      list: store.state.asideStore.asideAuthor
    }
  }
}
