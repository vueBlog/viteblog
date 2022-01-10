<script setup>

</script>

<template>
  <ul>
    <li class="link">
      home
      <router-link to="/home">home</router-link>
    </li>
    <li>
      home
      <router-link to="/list">list</router-link>
    </li>
    <li>
      <router-link to="/about">about</router-link>
    </li>
  </ul>
  <el-button type="primary">Primary</el-button>
  <router-view></router-view>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.link {
  color: $colors-primary;
}
</style>
