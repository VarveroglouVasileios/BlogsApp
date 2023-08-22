import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
export default {
  namespaced: true,
  state() {
    return {
      selectedCategories: [],
      articles: [],
      searchQuery: "",
    };
  },
  actions,
  mutations,
  getters,
};
