<template>
  <div class="m-yousong">
    <h2 class="ui-title">你的歌曲宝库</h2>
    <div class="yousong-container">
      <Post
        v-for="(item, index) in songList"
        :key="index"
        :item="item"
        @click="setPlaying(item)"
      />
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
        name: "RAPSTAR (Explicit)",
        post:
          "https://y.qq.com/music/photo_new/T002R300x300M0000046LF4q3rNS88.jpg?max_age=2592000",
        url:
          "http://dl.stream.qqmusic.qq.com/C4000021959x2Qw30N.m4a?guid=6529008537&vkey=1A892CB23C2FDB8CBD0B454B0F9F33805E838236264A97CD978904A9689D21A754467C027C572AAC9C130B3138C2ED0B364CF79DE299B5A2&uin=810839700&fromtag=66",
        singer: "Polo G",
      },
      {
        name: "MONTERO (Call Me By Your Name) (Explicit)",
        post:
          "https://y.qq.com/music/photo_new/T002R300x300M000001GdEeL324ZeR.jpg?max_age=2592000",
        url:
          "http://dl.stream.qqmusic.qq.com/C4000018ljhZ18Zv2K.m4a?guid=7682967024&vkey=7C72E17161C6BD0D0D9277F4C510D39BAA1116977FAB30143E757F956ADFF745981FC99FD99F8639F1F57D5150754EAFFFC9F2D727FE8B00&uin=810839700&fromtag=66",
        singer: "Lil Nas X",
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
.m-yousong {
  margin-top: 30px;
  .ui-title {
    font-size: 20px;
    font-weight: normal;
    color: $dark;
    margin-bottom: 20px;
  }
  .yousong-container {
    display: flex;
    flex-wrap: wrap;
    .m-post {
      margin-bottom: 20px;
    }
  }
}
</style>
