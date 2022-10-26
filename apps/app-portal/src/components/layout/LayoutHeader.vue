<template>
  <ElRow justify="end" align="middle" :gutter="20" class="layout-header">
    <ElCol :span="6">
      <el-link type="info" :underline="false" href="/"><h1 style="color: #ffffff;">管理系统</h1></el-link>
    </ElCol>
    <el-col :span="14">
      <slot></slot>
    </el-col>
    <ElCol :span="4">
      <el-dropdown>
        <span class="user-info">
          <!-- <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" /> -->
          <span> 管理员</span>
          <el-icon class="el-icon--right">
            <ArrowDown />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人资料</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item disabled>Action 4</el-dropdown-item>
            <el-dropdown-item divided>注销</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </ElCol>
  </ElRow>
</template>
<script setup>

</script>
<style>
.layout-header {
  height: 100%;
  padding: 0 20px;
  color: var(--el-color-white, #ffffff);
  background-color: var(--el-color-primary, "red");

}
.user-info {
  color: var(--el-color-white, #ffffff);
}
.header-menu.el-menu--horizontal {
  background-color: var(--el-color-primary, "red");
  border-bottom-width: 0;
}
</style>
