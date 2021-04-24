<template>
  <el-row class="m-topbar">
    <el-col :span="12" class="col-l">
      <div class="m-option">
        <i class="el-icon-arrow-left"></i>
        <i class="el-icon-arrow-right"></i>
      </div>
      <div class="ui-search">
        <el-input
          placeholder="搜索音乐"
          prefix-icon="el-icon-search"
          v-model="keyWord"
        >
          <template #suffix v-if="cleanAble">
            <i class="el-icon-close" @click="keyWord = ''"></i>
          </template>
        </el-input>
      </div>
    </el-col>
    <el-col :span="12" class="col-r">
      <svg-icon icon-class="tv_message" name="tv_message" fill="red"></svg-icon>
      <svg-icon icon-class="tv_skin" name="tv_skin"></svg-icon>
      <svg-icon icon-class="tv_setting" name="tv_setting"></svg-icon>
      <svg-icon icon-class="tv_to_mini" name="tv_to_mini"></svg-icon>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
export default defineComponent({
  name: "TopBar",
  setup() {
    let keyWord = ref<string>("");
    let cleanAble = ref<boolean>(false);
    watch(keyWord, (newVal) => {
      cleanAble.value = Boolean(newVal);
    });
    return { keyWord, cleanAble };
  },
});
</script>

<style lang="scss">
.m-topbar {
  height: 76px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: $main-bg-color;
  padding: 0 40px;
  .col-l {
    display: flex;
    align-items: center;
    .m-option {
      display: flex;
      justify-content: space-between;
      width: 50px;
      margin-right: 6px;
      i {
        font-size: 18px;
        cursor: pointer;
        color: $mid-gary;
        font-weight: 500;
        &:hover {
          color: $green;
        }
      }
    }
    .ui-search {
      .el-input {
        width: 200px;
        line-height: 33px;
        height: 33px;
      }
      .el-input__inner {
        background: $light-gary;
        border-radius: 33px;
        height: 33px;
        line-height: 33px;
        border: none;
        font-size: 12px;
        color: $dark;
        display: block;
        &::placeholder {
          color: $font-lightl-gary;
        }
      }
      .el-input__suffix {
        color: $mid-gary;
        margin-right: 6px;
        .el-icon-close {
          cursor: pointer;
        }
      }
      .el-input__icon {
        line-height: 33px;
        color: $mid-gary;
      }
    }
  }
  .col-r {
    display: flex;
    justify-content: flex-end;
    svg {
      filter: $filter-gary;
      width: 14px !important;
      margin-left: 16px;
      cursor: pointer;
      &:hover {
        filter: $filter-green;
      }
    }
  }
}
</style>
