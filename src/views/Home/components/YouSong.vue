<template>
  <div class="m-yousong">
    <h2 class="ui-title">你的歌曲宝库</h2>
    <div class="yousong-container">
      <Post v-for="item in 10" :key="item" />
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
