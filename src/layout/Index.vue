<template>
  <el-container class="container">
    <el-aside>
      <img src="https://y.qq.com/mediastyle/yqq/img/logo.png" class="logo" />
      <section class="online-music m-aside-nav">
        <p class="title">在线音乐</p>
        <div
          class="item"
          :class="{ active: index == 1 }"
          v-for="(item, index) in onlineMusic"
          :key="index"
        >
          <img :src="item.icon" />
          <span class="text">
            {{ item.name }}
          </span>
        </div>
      </section>
      <section class="my-music m-aside-nav">
        <p class="title">我的音乐</p>
        <div class="item" v-for="(item, index) in myMusic" :key="index">
          <img :src="item.icon" />
          <span class="text">
            {{ item.name }}
          </span>
        </div>
      </section>
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script lang="ts">
type nav = {
  name: string;
  url: string;
  icon: string;
};
import { defineComponent } from "vue";

export default defineComponent({
  name: "Layout",
  components: {},
  setup() {
    let onlineMusic: nav[] = [
      {
        name: "音乐馆",
        url: "",
        icon: require("../assets/lv_music_hall.svg"),
      },
      {
        name: "视频",
        url: "",
        icon: require("../assets/lv_vedio.svg"),
      },
      {
        name: "电台",
        url: "",
        icon: require("../assets/lv_diantai.svg"),
      },
    ];
    let myMusic: nav[] = [
      {
        name: "我喜欢",
        url: "",
        icon: require("../assets/lv_ilike.svg"),
      },
      {
        name: "本地歌曲",
        url: "",
        icon: require("../assets/lv_local.svg"),
      },
      {
        name: "下载歌曲",
        url: "",
        icon: require("../assets/lv_download.svg"),
      },
      {
        name: "最近播放",
        url: "",
        icon: require("../assets/lv_history.svg"),
      },
    ];
    return { onlineMusic, myMusic };
  },
});
</script>

<style lang="scss">
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
    }
    .m-aside-nav {
      .title {
        font-size: 12px;
        color: $font-dark;
        opacity: 0.8;
        padding-left: 15px;
        margin-top: 25px;
        margin-bottom: 15px;
        font-weight: 300;
      }
      .item {
        font-size: 12px;
        color: $font-dark;
        font-weight: 400;
        display: flex;
        align-items: center;
        padding-left: 15px;
        height: 30px;
        margin-bottom: 12px;
        border-radius: 4px;
        position: relative;
        &:hover {
          background: $hover-bg-color;
        }
        &.active {
          background: linear-gradient(to right, $blue 0%, $green 100%);
          color: $white;
        }
        img {
          width: 18px;
          opacity: 0.6;
          margin-right: 5px;
        }
      }
      &.my-music {
        margin-top: 45px;
      }
    }
  }
  .el-main {
    background: $main-bg-color;
    flex: 1 0 auto;
    width: 50%;
  }
}
</style>
