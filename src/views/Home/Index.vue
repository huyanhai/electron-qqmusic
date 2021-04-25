<template>
  <PageTitle title="推荐" />
  <Today />
  <YouSong />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/PageTitle.vue"; // @ is an alias to /src
import Today from "./components/Today.vue";
import YouSong from "./components/YouSong.vue";
export default defineComponent({
  name: "Home",
  components: {
    PageTitle,
    Today,
    YouSong,
  },
});
</script>
