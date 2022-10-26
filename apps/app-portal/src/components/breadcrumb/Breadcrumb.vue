<template>
<el-breadcrumb class="breadcrumb" :separator-icon="ArrowRight">
  <el-breadcrumb-item><a href="/home">首页</a></el-breadcrumb-item>
  <el-breadcrumb-item>用户管理</el-breadcrumb-item>
  <el-breadcrumb-item>新增用户</el-breadcrumb-item>
</el-breadcrumb>
</template>
<script setup>
import { ArrowRight } from '@element-plus/icons-vue'

</script>
<style>
.breadcrumb {
  padding: 16px;
}
</style>
