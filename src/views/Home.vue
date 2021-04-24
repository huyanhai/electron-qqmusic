<template>
  <PageTitle title="音乐馆" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/PageTitle.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    PageTitle,
  },
});
</script>
