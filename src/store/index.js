import { createStore } from "vuex";
import authModule from "./modules/auth/index";
import articlesModules from "./modules/articles/index";

const store = createStore({
  modules: {
    auth: authModule,
    articles: articlesModules,
  },
});

export default store;
