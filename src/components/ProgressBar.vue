<template>
  <div v-show="showFlag" class="progress-bar-box">
    <el-progress :duration="3" :percentage="percentage" :stroke-width="strokeWidth" :indeterminate="indeterminate" :color="color" :stroke-linecap="strokeLinecap" :show-text="false" />
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const props = defineProps({
    percentage: {
      required: true,
      type: Number,
      default: 0
    },
    strokeWidth: {
      type: Number,
      default: 5
    },
    indeterminate: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: ''
    },
    strokeLinecap: {
      type: String,
      default: 'square',
      validator(value) {
        return ['butt', 'round', 'square'].includes(value)
      }
    }
  })

  let showFlag = ref(false)

  const show = () => {
    showFlag.value = true
  }

  const hide = () => {
    showFlag.value = false
  }
  defineExpose({
    show,
    hide
  })
</script>

<style lang="scss" scoped>
  .progress-bar-box {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }
</style>
