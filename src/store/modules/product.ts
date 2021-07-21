import { HTTP } from "../../helper/http-common";
import store from "../index";
// import axios from "axios";
import { Commit } from "vuex";

// const baseURL = "https://fakestoreapi.com/products/";

const product = {
  namespaced: true,
  state: {
    products: [],
    product: null,
    pageNumber: 1,
    currentPage: 1,
  },
  actions: {
    getProducts({ commit }: { commit: Commit }) {
      // axios.get(baseURL)
      HTTP.get(`products`).then((response) => {
        commit("SET_PRODUCTS", response.data);
        // console.log(response.data);
      });
    },
    getPageNumber({ commit }: { commit: Commit }) {
      // axios.get(baseURL)
      HTTP.get(`products`).then((response) => {
        commit("GET_PAGE_NUMBER", response.data.length);
        // console.log(response.data);
      });
    },
    setCurrentPage({ commit }: { commit: Commit }, page: number) {
      commit("SET_CURRENT_PAGE", page);
    },
    getProductPaginate({ commit }: { commit: Commit }, page: number) {
      // axios.get(baseURL)

      HTTP.get(`products?_sort=id&_order=desc&_page=${page}&_limit=8`).then(
        (response) => {
          commit("SET_PRODUCTS", response.data);
          // console.log(response.data);
        }
      );
    },
    getProduct({ commit }: { commit: Commit }, { productId }: any) {
      // console.log(productId)
      // axios.get(`https://fakestoreapi.com/products/${productId}`)
      HTTP.get(`products/${productId}`).then((response) => {
        commit("SET_PRODUCT", response.data);
        //  console.log(response.data);
      });
      // .catch((error) => {});
    },
    createNewProduct({ commit }: { commit: Commit }, product: Array<any>) {
      HTTP.post(`products`, product)
        .then((response) => {
          store.dispatch("alert/setSuccess", "Create product is Success!");
          store.dispatch("product/getProducts");
        })
        .catch((error) => {
          store.dispatch("alert/setFail", "Create product is Fail!");
        })
        .finally(() => {
          store.dispatch("alert/showAlert");
          setTimeout(() => {
            store.dispatch("alert/hideAlert");
          }, 5000);
        });
    },
    deleteProduct({ commit }: { commit: Commit }, productId: number) {
      // console.log(productId)
      HTTP.delete(`products/${productId}`)
        .then((response) => {
          store.dispatch("alert/setSuccess", "Delete product is Success!");
          store.dispatch("product/getProducts");
        })
        .catch((error) => {
          store.dispatch("alert/setFail", "Delete product is Fail!");
        })
        .finally(() => {
          store.dispatch("alert/showAlert");
          setTimeout(() => {
            store.dispatch("alert/hideAlert");
          }, 5000);
        });
    },
    updateProduct({ commit }: { commit: Commit }, product: any) {
      // console.log(productId)
      HTTP.patch(`products/${product.id}`, {
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image,
      })
        .then((response) => {
          store.dispatch("alert/setSuccess", "Update product is Success!");
        })
        .catch((error) => {
          store.dispatch("alert/setFail", "Update product is Fail!");
        })
        .finally(() => {
          store.dispatch("alert/showAlert");
          setTimeout(() => {
            store.dispatch("alert/hideAlert");
          }, 5000);
        });
    },
  },
  mutations: {
    SET_PRODUCTS(state: any, products: any) {
      // `state` is the local module state
      state.products = products;
    },
    GET_PAGE_NUMBER(state: any, pageNumber: number) {
      state.pageNumber = Math.round(pageNumber / 8);
    },
    SET_CURRENT_PAGE(state: any, page: number) {
      state.currentPage = page === undefined ? 1 : page;

      // console.log(state.currentPage);
    },
    SET_PRODUCT(state: any, product: any) {
      state.product = product;
    },
    TOGGLE_ALERT(state: any) {
      state.updatealert = !state.updatealert;
    },
    SUCCESS_UPDATE(state: any, issuccess: boolean) {
      state.updatesuccess = issuccess;
    },
    DELETE_PRODUCT(state: any, productId: number) {
      state.cart = state.cart.filter((item: any) => {
        return item.product.id != productId;
      });
      // saveState(state.cart);
      // console.log(state.cart.length)
    },
  },
};
export default product;
