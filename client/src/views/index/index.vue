<template>
  <div class="common-layout">
    <el-container>
      <el-scrollbar class="slide-bar-container">
        <SlideBar></SlideBar>
      </el-scrollbar>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import SlideBar from "./slideBar/slideBar.vue"

import './index.less'

export default {
  components: {
    SlideBar,
  }
}
</script>
