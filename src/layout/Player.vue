<template>
  <div class="m-player">
    <div class="m-progress">
      <span class="ui-line" :style="'width:' + process + '%'"></span>
    </div>
    <div class="m-songs">
      <div class="col-l">
        <div class="post">
          <img :src="playingMusic?.post || defaultPost" />
        </div>
        <div class="infos">
          <span class="name">
            <template v-if="playingMusic.name">
              <p class="song">{{ playingMusic.name }}</p>
              -
              <p class="singer">{{ playingMusic.singer }}</p>
            </template>
            <p class="song" v-else>QQ音乐，让生活充满音乐</p>
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
        <span class="time">
          {{ currentTimes || "00:00" }} / {{ musciAllTimes || "00:00" }}
        </span>
        <svg-icon class="item" icon-class="bv_lyric" name="bv_lyric"></svg-icon>
        <svg-icon
          class="item"
          icon-class="bv_playlist"
          name="bv_playlist"
        ></svg-icon>
      </div>
    </div>
  </div>
  <audio
    ref="audio"
    :src="playingMusic.url"
    style="width: 0; height: 0"
    preload="true"
  ></audio>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from "vue";
import { useStore } from "vuex";
let timer: any = null;

export default defineComponent({
  setup() {
    let playing = ref<boolean>(false);
    let store = useStore();
    let musciAllTimes = ref<string>(""); // 音乐总时长
    let currentTimes = ref<string>(""); // 当前播放时长
    let process = ref<number>(0);
    let audio = ref(null as HTMLAudioElement | null);
    let defaultPost: string = require("../assets/minidefaultCoverImage@2x.png");
    let playingMusic = computed(() => store.getters.playing);
    // 格式化音乐时长
    function formateTime(time: string | number): string | number {
      return time > 10 ? time : "0" + time;
    }
    // 设置播放总时长
    function setTimes(duration: number): void {
      let minute = parseInt(`${duration / 60}`);
      let second = parseInt(`${duration % 60}`);
      musciAllTimes.value = `${formateTime(minute)}:${formateTime(second)}`;
    }
    // 监听进度变化
    function updateProcess(): void {
      let minute = parseInt(`${(audio.value?.currentTime || 0) / 60}`);
      let second = parseInt(`${(audio.value?.currentTime || 0) % 60}`);

      currentTimes.value = `${formateTime(minute)}:${formateTime(second)}`;
      process.value =
        ((audio.value?.currentTime || 0) / (audio.value?.duration || 1)) * 100;
    }
    watch([playingMusic, playing], ([newVal1], [oldVal1]) => {
      if (newVal1 !== oldVal1) {
        currentTimes.value = "00:00";
        audio.value?.pause();
        audio.value?.removeEventListener("timeupdate", updateProcess);
      }
      if (timer) {
        clearTimeout(timer);
      }
      if (audio.value?.paused) {
        playing.value = true;
        timer = setTimeout(() => {
          audio.value?.play();
          setTimes(audio.value?.duration || 0);
          audio.value?.addEventListener("timeupdate", updateProcess);
        }, 100);
      } else {
        audio.value?.pause();
      }
    });
    return {
      playing,
      defaultPost,
      playingMusic,
      audio,
      musciAllTimes,
      currentTimes,
      process,
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
      transition: all 0.5s;
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
      min-width: 200px;
      .post {
        width: 40px;
        height: 40px;
        border-radius: 2px;
        margin-right: 10px;
        overflow: hidden;
        flex: 0 0 auto;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .infos {
        flex: 1 0 auto;
        width: 50%;
        .name {
          font-size: 12px;
          color: $mid-gary;
          display: flex;
          font-weight: 400;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
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
      min-width: 200px;
      margin: 0 50px;
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
      min-width: 200px;
      .time {
        font-size: 12px;
        color: $mid-gary;
        font-weight: 500;
      }
      .item {
        width: 14px !important;
        height: 14px !important;
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
