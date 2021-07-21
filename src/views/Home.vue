<template>
  <div class="common-layout">
    <el-container>
      <el-header><Nav /></el-header>
      <el-main><router-view /></el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Nav from ""

export default defineComponent({
  name: "Home",
  components: {
    Nav,
  },
});
</script>
