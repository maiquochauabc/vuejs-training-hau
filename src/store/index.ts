import { createStore } from "vuex";
import product from "./modules/product";
import loader from "./modules/loader";
import cart from "./modules/cart";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    product,
    loader,
    cart,
  },
});
