<template>
  <div class="footer">
    <div class="link-box">
      <span>友情链接：</span>
      <a
        v-for="item in friendLink"
        :key="item.text"
        class="link-item"
        :href="item.link"
        target="_blank"
      >
        {{ item.text }}
      </a>
    </div>
    <div class="verbum-sapienti">
      <span>{{ logoText }}：</span>
      <span>{{ logoDescription }}</span>
    </div>
    <div class="website-information">
      <span>
        Powered by
        <a
          class="link-item"
          href="https://github.com/fxss5201"
          target="_blank"
          style="margin: 0 5px"
        >
          fxss5201
        </a>
        © 2019-{{ curYear }}
      </span>
      <router-link to="/about" class="author">{{ author }}</router-link>
      <a class="link-item" :href="record_link" target="_blank">{{ record }}</a>
    </div>
  </div>
</template>

<script setup>
  import { useStore } from 'vuex'
  const store = useStore()

  const logoText = store.state.logoText
  const logoDescription = store.state.logoDescription
  const friendLink = JSON.parse(import.meta.env.VITE_friendLink)
  const author = import.meta.env.VITE_author
  const record = import.meta.env.VITE_record
  const record_link = import.meta.env.VITE_record_link
  const curYear = new Date().getFullYear()
</script>

<style lang="scss" scoped>
  @import './../styles/components/page-footer.scss';
</style>
