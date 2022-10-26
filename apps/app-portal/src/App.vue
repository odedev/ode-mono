<template>
  <!-- <Transition name="el-zoom-in-center">
    <RouterView />
  </Transition> -->
  <RouterView v-slot="{ Component }">
    <Transition name="el-zoom-in-center">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

<style scoped>
#app {
  height: 100%;
  width: 100%;
}
</style>
