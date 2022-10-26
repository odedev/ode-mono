<template>
  <el-container class="app-container">
    <el-header class="app-header">
      <LayoutHeader>
        <Nav mode="horizontal"/>
      </LayoutHeader>
    </el-header>
    <el-main class="app-main">
      <div class="app-main__content">
        <Breadcrumb />
        <Tag />
        <LayoutBody>
          <!-- <Transition name="el-fade-in">
            <RouterView />
          </Transition> -->
          <RouterView v-slot="{ Component }">
            <Transition>
              <component :is="Component" />
            </Transition>
          </RouterView>
        </LayoutBody>
      </div>
    </el-main>
    <!-- <el-footer>Footer</el-footer> -->
  </el-container>
</template>
<script setup>
import { RouterView } from 'vue-router'
import LayoutHeader from '@/components/layout/LayoutHeader.vue'
import LayoutBody from '@/components/layout/LayoutBody.vue'
import Nav from '@/components/nav/Nav.vue'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue'
import Tag from '@/components/tag/Tag.vue'

</script>

<style>
.app-header.el-header {
  padding: 0;
}
.app-aside {
  height:  calc(100vh - 60px);
  /* background-color: #545c64; */
  border-right: solid 1px var(--el-border-color);
}
.app-main.el-main {
  padding: 0;
}
.app-main__content {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
