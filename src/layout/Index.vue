<template>
  <el-container class="container">
    <el-aside>
      <img src="https://y.qq.com/mediastyle/yqq/img/logo.png" class="logo" />
      <NavBar />
    </el-aside>
    <el-main>
      <TopBar />
      <router-view />
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./NavBar.vue";
import TopBar from "./TopBar.vue";
export default defineComponent({
  name: "Layout",
  components: {
    NavBar,
    TopBar,
  },
});
</script>

<style lang="scss">
* {
  cursor: default;
}
.container {
  height: 100%;
  display: flex;

  .el-aside,
  .el-main {
    height: 100%;
  }
  .el-aside {
    background: $aside-bg-color;
    flex: 0 0 auto;
    width: 210px !important;
    box-sizing: border-box;
    padding: 50px 25px 0 25px;
    .logo {
      width: 88px;
      margin-left: 15px;
    }
  }
  .el-main {
    background: $main-bg-color;
    flex: 1 0 auto;
    width: 50%;
    box-sizing: border-box;
    padding: 0 40px;
    min-width: 614px;
  }
}
</style>
