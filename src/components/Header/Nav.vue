<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1"
      ><router-link class="router-link" :to="{ name: 'HomeContent' }"
        >Home</router-link
      ></el-menu-item
    >
    <el-menu-item index="2"
      ><router-link class="router-link" :to="{ name: 'Products' }"
        >Products</router-link
      ></el-menu-item
    >
    <el-submenu index="3">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-submenu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item class="shopping-cart"> <ShoppingCart /> </el-menu-item>
  </el-menu>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ShoppingCart from "./ShoppingCart.vue";

export default defineComponent({
  components: {
    ShoppingCart,
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key: number, keyPath: string) {
      console.log(key, keyPath);
    },
  },
});
</script>
<style lang="scss" scoped>
.router-link {
  text-decoration: none;
  display: block;
}
.shopping-cart {
  position: absolute;
  right: 0;
}
</style>
