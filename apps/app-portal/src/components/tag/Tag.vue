<template>
<div class="tag">
  <el-tag class="tag-home" effect="plain" type="info">首页</el-tag>
  <el-tag effect="plain" type="info" closable>企业管理</el-tag>
  <el-tag effect="plain" type="info" closable>用户管理</el-tag>
  <el-tag effect="plain" type="info" closable>应用管理</el-tag>
</div>
</template>
<script setup>
import { ArrowRight } from '@element-plus/icons-vue'

</script>
<style>
.tag {
  padding: 0 16px;
  border-top: solid 1px var(--el-border-color);
  border-bottom: solid 1px var(--el-border-color);

}
.tag .el-tag {
  height: 32px;
  border-radius: unset;
  border-top-width: 0;
  border-bottom-width: 0;
  border-left-width: 0;
  cursor: pointer;
}
.tag-home.el-tag {
  padding-left: 0;
  padding-right: 16px;
}
</style>
