<template>
  <div>about</div>
</template>

<script setup>
  import { onMounted, ref, reactive } from 'vue'
  import { useRoute } from 'vue-router'
  import { useStore } from 'vuex'
  import getAsideEvent from './../utils/aside'

  const route = useRoute()
  const store = useStore()

  const aside = reactive({
    loading: false,
    list: []
  })

  getAsideEvent(route, store).then(res => {
    aside.loading = res.loading
    aside.list = res.list
  })
</script>
