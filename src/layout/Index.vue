<template>
  <el-container class="container">
    <el-aside>
      <img src="https://y.qq.com/mediastyle/yqq/img/logo.png" class="logo" />
      <NavBar />
    </el-aside>
    <el-main>
      <TopBar />
      <div class="content">
        <router-view />
      </div>
      <Player @playMusicList="playMusicList" />
    </el-main>
  </el-container>
  <el-drawer
    :withHeader="false"
    v-model="showListLayer"
    direction="rtl"
    destroy-on-close
    custom-class="music-list"
  >
    <div class="hd">
      <h3 class="ui-title">播放列表</h3>
      <div class="option">
        <div class="col-l">共{{ playMusicList.length }}首歌曲</div>
        <div class="col-r">
          <span class="add">
            <svg-icon class="item" icon-class="bv_add" name="bv_add">
            </svg-icon>
            添加到
          </span>
          <span class="add">
            <svg-icon class="item" icon-class="bv_delete" name="bv_delete">
            </svg-icon>
            清空
          </span>
        </div>
      </div>
    </div>
    <ul class="bd">
      <li
        class="repeart-item"
        v-for="(item, index) in playingList"
        :key="index"
      >
        <div class="col-l">
          <img :src="item.post" />
          <div class="info">
            <p class="name">{{ item.name }}</p>
            <p class="singer">{{ item.singer }}</p>
          </div>
        </div>
      </li>
    </ul>
  </el-drawer>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";
import NavBar from "./NavBar.vue";
import TopBar from "./TopBar.vue";
import Player from "./Player.vue";
export default defineComponent({
  name: "Layout",
  components: {
    NavBar,
    TopBar,
    Player,
  },
  setup() {
    let store = useStore();
    let showListLayer = ref<boolean>(false);
    let playingList = computed(() => store.getters.playList);

    function playMusicList() {
      if (playingList.value.length > 0) showListLayer.value = true;
    }
    return {
      playMusicList,
      showListLayer,
      playingList,
    };
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
    min-width: 614px;
    padding: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .m-topbar {
      flex: 0 0 auto;
    }
    .content {
      flex: 1 0 auto;
      padding: 0 40px;
      overflow-y: scroll;
      height: 50vh;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .m-player {
      flex: 0 0 auto;
    }
  }
}
.music-list {
  width: 320px !important;
  box-shadow: -5px 0 10px rgba($color: $dark, $alpha: 0.05);
  display: flex;
  flex-direction: column;
  .hd {
    padding: 20px 20px 10px 20px;
    flex: 0 0 auto;
    .ui-title {
      font-size: 20px;
      font-weight: 400;
      color: $dark;
      margin-bottom: 5px;
    }
    .option {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .col-l {
        font-weight: 400;
        font-size: 12px;
      }
      .col-r {
        display: flex;
        .add {
          display: flex;
          align-items: center;
          margin-left: 10px;
          font-size: 12px;
          font-weight: 400;
          color: $dark;
          .item {
            width: 14px !important;
            height: 14px !important;
            margin-right: 5px;
            filter: $filter-gary;
            &:hover {
              filter: $filter-green;
            }
          }
        }
      }
    }
  }
  .bd {
    overflow: hidden;
    overflow-y: scroll;
    flex: 1 0 auto;
    height: 80vh;
    &::-webkit-scrollbar {
      display: none;
    }
    .repeart-item {
      display: flex;
      justify-content: space-between;
      height: 69px;
      box-sizing: border-box;
      border-bottom: 1px solid $border-gary;
      padding: 0 20px;
      &:hover {
        background: $border-gary;
      }
      .col-l {
        display: flex;
        align-items: center;
        img {
          width: 35px;
          height: 35px;
        }
        .info {
          margin-left: 10px;
          max-width: 50%;
          .name {
            font-weight: 400;
            font-size: 12px;
            color: $dark;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .singer {
            font-weight: 400;
            font-size: 12px;
            color: $dark;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
.el-overlay {
  background: none;
}
</style>
