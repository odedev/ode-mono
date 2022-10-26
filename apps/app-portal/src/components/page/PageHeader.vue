<template>
<el-page-header @back="onBack">
  <template #breadcrumb>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: './page-header.html' }">
        homepage
      </el-breadcrumb-item>
      <el-breadcrumb-item
        ><a href="./page-header.html">route 1</a></el-breadcrumb-item
      >
      <el-breadcrumb-item>route 2</el-breadcrumb-item>
    </el-breadcrumb>
  </template>
  <template #content>
    <div class="flex items-center">
      <el-avatar
        class="mr-3"
        :size="32"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <span class="text-large font-600 mr-3"> Title </span>
      <span
        class="text-sm mr-2"
        style="color: var(--el-text-color-regular)"
      >
        Sub title
      </span>
      <el-tag>Default</el-tag>
    </div>
  </template>
</el-page-header>
</template>
<script setup>

</script>
