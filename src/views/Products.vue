<template>
  <div>
    <div class="product-list">
      <div v-for="product in products" :key="product.id">
        <ProductCart :product="product" />
      </div>
    </div>
    <div class="pagination">
      <el-pagination
        center
        background
        layout="prev, pager, next"
        v-model:currentPage="page"
        :total="pageNumber * 10"
        @current-change="changePage"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductCart from "../components/client/ProductCart.vue";

export default defineComponent({
  components: {
    ProductCart,
  },
  data() {
    return {
      page: 1,
    };
  },
  computed: {
    products() {
      return this.$store.state.product.products;
    },
    pageNumber() {
      console.log(this.$store.state.product.pageNumber);
      return this.$store.state.product.pageNumber;
    },
  },
  methods: {
    changePage() {
      this.$router.push(`/products/page-${this.page}`);
    },
  },
  mounted() {
    this.$store.dispatch("product/getPageNumber");
    // console.log(this.page);
  },
  watch: {
    page: function () {
      console.log("change page " + this.page);
    },
  },
  created() {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route.params,
      () => {
        this.$store.dispatch(
          "product/getProductPaginate",
          this.$route.params.page
        );
        this.$store.dispatch("product/setCurrentPage", this.$route.params.page);
        this.page = Number(this.$store.state.product.currentPage);
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    );
  },
});
</script>

<style lang="scss" scoped>
.product-list {
  display: flex;
  direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: stretch;
}
.pagination {
  margin-top: 5rem;
  text-align: center;
}
</style>
