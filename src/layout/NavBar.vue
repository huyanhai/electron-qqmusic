<template>
  <section class="online-music m-aside-nav">
    <p class="title">在线音乐</p>
    <div
      class="item"
      :class="{ active: `online_${index}` == active }"
      v-for="(item, index) in onlineMusic"
      :key="index"
      @click="setActive(index, 'online')"
    >
      <img :src="item.iconActive" v-if="`online_${index}` == active" />
      <img :src="item.icon" v-else />
      <span class="text">
        {{ item.name }}
      </span>
    </div>
  </section>
  <section class="my-music m-aside-nav">
    <p class="title">我的音乐</p>
    <div
      class="item"
      :class="{ active: `my_${index}` == active }"
      v-for="(item, index) in myMusic"
      :key="index"
      @click="setActive(index, 'my')"
    >
      <img :src="item.iconActive" v-if="`my_${index}` == active" />
      <img :src="item.icon" v-else />
      <span class="text">
        {{ item.name }}
      </span>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
type nav = {
  name: string;
  url: string;
  icon: string;
  iconActive: string;
};
export default defineComponent({
  name: "NavBar",
  setup() {
    let onlineMusic: nav[] = [
      {
        name: "音乐馆",
        url: "",
        icon: require("../assets/lv_music_hall.svg"),
        iconActive: require("../assets/lv_music_hall_a.svg"),
      },
      {
        name: "视频",
        url: "",
        icon: require("../assets/lv_vedio.svg"),
        iconActive: require("../assets/lv_vedio_a.svg"),
      },
      {
        name: "电台",
        url: "",
        icon: require("../assets/lv_diantai.svg"),
        iconActive: require("../assets/lv_diantai_a.svg"),
      },
    ];
    let myMusic: nav[] = [
      {
        name: "我喜欢",
        url: "",
        icon: require("../assets/lv_ilike.svg"),
        iconActive: require("../assets/lv_ilike_a.svg"),
      },
      {
        name: "本地歌曲",
        url: "",
        icon: require("../assets/lv_local.svg"),
        iconActive: require("../assets/lv_local_a.svg"),
      },
      {
        name: "下载歌曲",
        url: "",
        icon: require("../assets/lv_download.svg"),
        iconActive: require("../assets/lv_download_a.svg"),
      },
      {
        name: "最近播放",
        url: "",
        icon: require("../assets/lv_history.svg"),
        iconActive: require("../assets/lv_history_a.svg"),
      },
    ];
    let active = ref<string>("online_0");
    function setActive(item: number, type: string) {
      active.value = `${type}_${item}`;
    }
    return { onlineMusic, myMusic, active, setActive };
  },
});
</script>

<style lang="scss">
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
      img {
        opacity: 1;
      }
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
</style>
