import { Commit } from "vuex";

const loader = {
  namespaced: true,

  state: {
    loading: false,
    requestsPending: 0,
  },
  actions: {
    show({ commit }: { commit: Commit }) {
      commit("show");
      console.log("show");
    },
    hide({ commit }: { commit: Commit }) {
      commit("hide");
    },
    pending({ commit }: { commit: Commit }) {
      commit("pending");
    },
    done({ commit }: { commit: Commit }) {
      commit("done");
    },
  },
  mutations: {
    show(state: any): void {
      state.loading = true;
      console.log("pending");
    },
    hide(state: any) {
      state.loading = false;
    },
    pending(state: any) {
      if (state.requestsPending === 0) {
        state.loading = true;
        // loader.actions.show;
      }

      state.requestsPending++;
    },
    done(state: any) {
      if (state.requestsPending >= 1) {
        state.requestsPending--;
      }

      if (state.requestsPending <= 0) {
        // loader.actions.hide;
        state.loading = false;
      }
    },
  },
};
export default loader;
