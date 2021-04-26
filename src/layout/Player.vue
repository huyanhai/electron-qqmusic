<template>
  <div class="m-player">
    <div class="m-progress">
      <span class="ui-line"></span>
    </div>
    <div class="m-songs">
      <div class="col-l">
        <div class="post">
          <img :src="gettersCount?.post || defaultPost" />
        </div>
        <div class="infos">
          <span class="name">
            <p class="song">What's Wrong With Me</p>
            -
            <p class="singer">Lil Ghost小鬼</p>
          </span>
          <div class="more">
            <svg-icon
              class="item"
              icon-class="tv_like"
              name="tv_like"
            ></svg-icon>
            <svg-icon
              class="item"
              icon-class="bv_not_download"
              name="bv_not_download"
            ></svg-icon>
            <svg-icon
              class="item"
              icon-class="bv_more_op"
              name="bv_more_op"
            ></svg-icon>
          </div>
        </div>
      </div>
      <div class="col-m">
        <svg-icon
          class="ms"
          icon-class="bv_playmode_playlist"
          name="bv_playmode_playlist"
        ></svg-icon>
        <svg-icon
          class="music-p"
          icon-class="bv_play_pre_song"
          name="bv_play_pre_song"
        ></svg-icon>
        <span
          class="music"
          :class="{ playing: playing }"
          @click="playing = !playing"
        ></span>
        <svg-icon
          class="music-p"
          icon-class="bv_play_next_song"
          name="bv_play_next_song"
        ></svg-icon>
        <svg-icon class="ms" icon-class="bv_volume" name="bv_volume"></svg-icon>
      </div>
      <div class="col-r">
        <span class="time">00:09 / 02:36</span>
        <svg-icon class="item" icon-class="bv_lyric" name="bv_lyric"></svg-icon>
        <svg-icon
          class="item"
          icon-class="bv_playlist"
          name="bv_playlist"
        ></svg-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    let playing = ref<boolean>(false);
    let store = useStore();
    let defaultPost: string = require("../assets/minidefaultCoverImage@2x.png");
    return {
      playing,
      defaultPost,
      gettersCount: computed(() => store.getters.playing),
    };
  },
});
</script>

<style scoped lang="scss">
.m-player {
  height: 80px;
  .m-progress {
    background: $progress-gary;
    height: 2px;
    width: 100%;
    margin-top: 10px;
    overflow: hidden;
    .ui-line {
      background-image: linear-gradient(to right, $blue, $green);
      height: 2px;
      width: 20%;
      display: block;
    }
  }
  .m-songs {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    .col-l {
      display: flex;
      align-items: center;
      .post {
        width: 40px;
        height: 40px;
        border-radius: 2px;
        margin-right: 10px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .infos {
        .name {
          font-size: 12px;
          color: $mid-gary;
          display: flex;
          font-weight: 400;
          .song {
            margin-right: 5px;
            color: $dark;
          }
          .singer {
            margin-left: 5px;
          }
        }
        .more {
          margin-top: 4px;
          .item {
            width: 18px !important;
            height: 18px !important;
            margin-right: 10px;
            cursor: pointer;
            filter: $filter-gary;
            &:hover {
              filter: $filter-green;
            }
          }
        }
      }
    }
    .col-m {
      display: flex;
      align-items: center;
      svg {
        margin: 0 10px;
      }
      .ms {
        width: 18px !important;
        cursor: pointer;
        &:hover {
          filter: $filter-green;
        }
      }
      .music-p {
        width: 20px !important;
        &:hover {
          filter: $filter-green;
          cursor: pointer;
        }
      }
      .music {
        width: 40px !important;
        height: 40px !important;
        background: url("../assets/bv_play_song.svg") no-repeat;
        cursor: pointer;
        transition: all 0.3s;
        &.playing {
          background: url("../assets/bv_pause_song.svg") no-repeat;
        }
      }
    }
    .col-r {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .time {
        font-size: 12px;
        color: $mid-gary;
        font-weight: 400;
      }
      .item {
        width: 12px !important;
        height: 12px !important;
        margin-left: 10px;
        cursor: pointer;
        filter: $filter-gary;
        &:hover {
          filter: $filter-green;
        }
      }
    }
  }
}
</style>
