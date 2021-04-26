<template>
  <div class="m-today">
    <h2 class="ui-title">Hi 懂点。 今日为你打造</h2>
    <div class="today-container">
      <svg-icon
        class="ui-left"
        icon-class="arrow_left"
        name="arrow_left"
        fill="red"
      ></svg-icon>
      <svg-icon
        class="ui-right"
        icon-class="arrow_left"
        name="arrow_left"
      ></svg-icon>
      <div class="more-post">
        <Post
          v-for="(item, index) in songList"
          :key="index"
          :item="item"
          @click="setPlaying(item)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import Post from "./Post.vue";
import { Song } from "../../../types/playing";
export default defineComponent({
  components: {
    Post,
  },
  setup() {
    let songList = ref<Song[]>([
      {
        name: "Love Story (Taylor's Version)",
        post:
          "https://y.qq.com/music/photo_new/T002R300x300M000003B9bHD26W2cD_3.jpg?max_age=2592000",
        url:
          "http://dl.stream.qqmusic.qq.com/C400001Tqjgb3VecMP.m4a?guid=7824868040&vkey=8AFD7234B3FDAEBD607894D4FABBD9D54D50D5F59846C6D32B56A9AFF8F4664060C415A4DC447BDD8E14A0F9306F0C4BFE0711059C3B3284&uin=810839700&fromtag=66",
        singer: "Taylor Swift",
      },
    ]);
    let store = useStore();
    function setPlaying(item: Song) {
      store.commit("SET_PLAYING", item);
    }
    return { songList, setPlaying };
  },
});
</script>

<style lang="scss" scoped>
.m-today {
  margin-top: 10px;
  .ui-title {
    font-size: 20px;
    font-weight: normal;
    color: $dark;
    margin-bottom: 20px;
  }
  .today-container {
    position: relative;
    &:hover {
      .ui-left,
      .ui-right {
        display: block;
      }
    }
    .ui-left,
    .ui-right {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: -35px;
      height: 40px !important;
      cursor: pointer;
      filter: $filter-gary;
      display: none;
      &:hover {
        filter: $filter-green;
      }
    }
    .ui-right {
      transform: translateY(-50%) rotate(180deg);
      right: -35px;
      left: initial;
    }
    .more-post {
      display: flex;
      width: 100%;
    }
  }
}
</style>
