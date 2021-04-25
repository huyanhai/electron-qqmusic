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
        <Post />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Post from "./Post.vue";
export default defineComponent({
  components: {
    Post,
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
