<template>
  <el-menu
    default-active="/user"
    class="nav-menu"
    :mode="mode"
    router
    :background-color="isVertical ? '#ffffff' : '#409eff'"
    :text-color="isVertical ? '#303133' : '#ffffff'"
    :active-text-color="isVertical ? '#409EFF' : '#ffd04b'"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><Setting /></el-icon>
        <span>系统管理</span>
      </template>
      <el-menu-item index="/user">用户管理</el-menu-item>
      <el-menu-item index="1-2">组织管理</el-menu-item>
      <el-menu-item index="/role">角色管理</el-menu-item>
      <el-sub-menu index="1-4">
        <template #title>菜单管理</template>
        <el-menu-item index="1-4-1">新增</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><Document /></el-icon>
      <span>元数据</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><Document /></el-icon>
      <span>企业管理</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><Menu /></el-icon>
      <span>应用管理</span>
    </el-menu-item>
  </el-menu>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  mode: {
    type: String,
    required: false,
    default: 'vertical'
  }
})

const isVertical = computed(() => {
  console.log(props.mode)
  return props.mode === 'vertical'
})


</script>
<style>
.nav-menu.el-menu {
  border-right-width: 0px;
}
</style>
