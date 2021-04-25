<template>
  <div class="m-post">
    <div class="post">
      <img
        src="https://y.qq.com/music/photo_new/T002R300x300M000001SJnKq4E3nHB.jpg?max_age=2592000"
      />
      <i class="play"></i>
      <span class="m-playing">
        <svg-icon icon-class="headset" name="headset"></svg-icon>
        1200万
      </span>
    </div>
    <p class="ui-text">个性电台</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {},
});
</script>

<style lang="scss" scoped>
.m-post {
  margin-right: 20px;
  width: 175px;
  &:last-child {
    margin-right: 0;
  }
  .post {
    height: 175px;
    width: 175px;
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s;
    background: $dark;
    position: relative;
    &:hover {
      transform: translateY(-5px);
      img {
        opacity: 0.6;
      }
      .play {
        display: block;
      }
    }
    img {
      transition: all 0.3s;
      width: 100%;
      cursor: pointer;
    }
    .play {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: url("../../../assets/lv_play.svg") no-repeat;
      width: 48px;
      height: 48px;
      cursor: pointer;
      transition: all 0.3s;
      display: none;
      &:hover {
        background: url("../../../assets/lv_play_a.svg") no-repeat;
      }
    }
    .m-playing {
      position: absolute;
      bottom: 10px;
      right: 10px;
      background: rgba($color: $dark, $alpha: 0.9);
      border-radius: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      color: $white;
      padding: 0 10px;
      svg {
        width: 10px !important;
        margin-right: 4px;
      }
    }
  }
  .ui-text {
    font-size: 14px;
    margin-top: 12px;
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    &:hover {
      color: $green;
      cursor: pointer;
    }
  }
}
</style>
