<template>
  <h1 class="ui-title">{{ title }}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    title: {
      require: true,
      default: "标题",
      type: String,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.ui-title {
  height: 70px;
  line-height: 70px;
  font-size: 30px;
  color: $dark;
}
</style>
