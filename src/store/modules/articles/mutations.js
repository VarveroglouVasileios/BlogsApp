export default {
  createArticle(state, payload) {
    state.articles.push(payload);
  },
  loadArticles(state, payload) {
    state.articles = payload;
    console.log(state.articles);
    console.log("Articles loaded:", state.articles);
  },
  filterArticles(state, payload) {
    state.searchQuery = payload;
  },
  setSelectedCategories(state, payload) {
    state.selectedCategories = payload;
  },
  deletedArticle(state, id) {
    state.articles = state.articles.filter((article) => article.id !== id);
  },
};
