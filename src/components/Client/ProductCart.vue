<template>
  <div class="product-card">
    <div class="badge">Hot</div>
    <div class="product-tumb">
      <img :src="product.image" alt="" />
    </div>
    <div class="product-details">
      <span class="product-catagory"> {{ product.category }} </span>
      <h4>
        <a href=""> {{ product.title }} </a>
      </h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus
        nostrum!
      </p>
      <div class="product-bottom-details">
        <div class="product-price">${{ product.price }}</div>
        <div class="product-links">
          <a><i class="el-icon-shopping-cart-1"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    product: null,
  },
  methods: {
    addtocart() {
      this.$store.dispatch("cart/addtoCart", {
        product: this.product,
        quality: 1,
      });
    },
  },
});
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700");
// * {
//   -webkit-box-sizing: border-box;
//   box-sizing: border-box;
//   margin: 0;
//   padding: 0;
// }

body {
  font-family: "Roboto", sans-serif;
}
a {
  text-decoration: none;
}
.product-card {
  max-width: 18rem;
  width: 100%;
  position: relative;
  box-shadow: 0 2px 7px #dfdfdf;
  margin: 1rem 0.5rem;
  background: #fafafa;
}

.badge {
  position: absolute;
  left: 0;
  top: 20px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  background: red;
  color: #fff;
  padding: 3px 10px;
}

.product-tumb {
  display: flex;
  align-items: center;
  justify-content: center;
  //   height: 300px;
  //   padding: 50px;
  background: #fff;
}

.product-tumb img {
  max-width: 100%;
  height: 15rem;
}

.product-details {
  padding: 1rem;
}

.product-catagory {
  display: block;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: #ccc;
  margin-bottom: 18px;
}

.product-details h4 a {
  font-weight: 500;
  display: block;
  margin-bottom: 18px;
  text-transform: uppercase;
  color: #363636;
  text-decoration: none;
  transition: 0.3s;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.product-details h4 a:hover {
  color: #409eff;
}

.product-details p {
  font-size: 15px;
  line-height: 22px;
  margin-bottom: 18px;
  color: #999;
}

.product-bottom-details {
  overflow: hidden;
  border-top: 1px solid #eee;
  padding-top: 20px;
}

.product-bottom-details div {
  float: left;
  width: 50%;
}

.product-price {
  font-size: 18px;
  color: #409eff;
  font-weight: 600;
}

.product-price small {
  font-size: 80%;
  font-weight: 400;
  text-decoration: line-through;
  display: inline-block;
  margin-right: 5px;
}

.product-links {
  text-align: right;
}

.product-links a {
  display: inline-block;
  margin-left: 5px;
  color: #e1e1e1;
  transition: 0.3s;
  font-size: 30px;
}

.product-links a:hover {
  color: #409eff;
}
</style>
