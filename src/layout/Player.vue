<template>
  <div class="m-player">
    <div class="m-progress">
      <span class="ui-line"></span>
    </div>
    <div class="m-songs">
      <div class="col-l">left</div>
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
      <div class="col-r">right</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    let playing = ref<boolean>(false);
    return {
      playing,
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
  }
}
</style>
