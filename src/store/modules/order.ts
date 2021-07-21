import { HTTP } from "../../helper/http-common";
import store from "../index";
import router from "../../router";
import { Commit } from "vuex";

export const order = {
  namespaced: true,
  state: {
    order: [],
    orderList: [],
  },
  actions: {
    createOrder({ product, customer }: any) {
      HTTP.post(`orders`, {
        customer: customer,
        products: product,
      })
        .then((response: any) => {
          store.dispatch("alert/setSuccess", "Order is Success!");
          router.push({ name: "ProductList" });
        })
        .catch((error: any) => {
          store.dispatch("alert/setFail", "Order is Fail!");
        })
        .finally(() => {
          store.dispatch("alert/showAlert");
          setTimeout(() => {
            store.dispatch("alert/hideAlert");
          }, 5000);
        });
    },
    getProductIdOrder({ commit }: { commit: Commit }) {
      const items = store.getters("cart/getCart");
      // console.log(store.state.cart.cart);
      let id, quality;
      const orders: any = [];
      items.forEach((item: any) => {
        id = item.product.id;
        quality = item.quality;
        // console.log(state.order);
        orders.push({ id, quality });
        console.log(orders);
      });
      commit("SET_ORDER", orders);
    },
    getOrders({ commit }: { commit: Commit }) {
      HTTP.get(`orders`)
        .then((response: any) => {
          commit("SET_ORDERS", response.data);
        })
        .catch((error: any) => {});
    },
  },
  mutations: {
    SET_ORDER(state: any, order: any) {
      state.order = order;
    },
    SET_ORDERS(state: any, payload: any) {
      state.orderList = payload;
    },
  },
};
