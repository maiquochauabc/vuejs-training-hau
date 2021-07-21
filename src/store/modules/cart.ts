import { Commit } from "vuex";

const cart = {
  namespaced: true,
  state: {
    cart: loadState() || [],
    showCart: false,
  },
  getters: {
    getCart() {
      return cart;
    },
  },
  actions: {
    addtoCart({ commit }: { commit: Commit }, { product, quality }: any) {
      commit("ADD_CART", { product, quality });
    },
    showCart({ commit }: { commit: Commit }) {
      commit("SHOW_CART");
    },
    removefromCart({ commit }: { commit: Commit }, { product }: any) {
      commit("REMOVE_CART", { product });
    },
    removeallfromCart({ commit }: { commit: Commit }) {
      commit("REMOVE_ALL_CART");
    },
  },
  mutations: {
    ADD_CART(state: any, { product, quality }: any) {
      const productincart = state.cart.find((item: any) => {
        return item.product.id === product.id;
      });
      if (productincart) {
        productincart.quality += quality;
        saveState(state.cart);
        return;
      }
      state.cart.unshift({
        product,
        quality,
      });
      saveState(state.cart);
      // console.log(state.cart.length)
    },
    REMOVE_CART(state: any, { product }: any) {
      state.cart = state.cart.filter((item: any) => {
        return item.product.id != product.id;
      });
      saveState(state.cart);
      if (state.cart.length <= 0) {
        localStorage.removeItem("cart");
      }
      // console.log(state.cart.length)
    },
    REMOVE_ALL_CART(state: any) {
      state.cart = [];
      localStorage.removeItem("cart");
    },
    SHOW_CART(state: any) {
      state.showCart = !state.showCart;
    },
  },
};
export default cart;

function loadState() {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null || serializedState == "[]") {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

function saveState(state: any) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (err) {
    console.error(`Something went wrong: ${err}`);
  }
}
