export default {
  getArtictles(state) {
    console.log("Array choices", state.selectedCategories);
    console.log("Current articles state:", state.articles); // Add this line
    // rest of the code...    // If searchQuery is not empty, filter the articles based on title
    if (state.searchQuery.trim()) {
      return state.articles.filter((article) =>
        article.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    }
    // If there are selected categories, filter articles based on category
    else if (state.selectedCategories.length > 0) {
      return state.articles.filter((article) =>
        state.selectedCategories.includes(article.category)
      );
    }
    // If neither searchQuery nor selected categories are present, return all articles
    else {
      return state.articles;
    }
  },
  getArticleById: (state) => (id) => {
    return state.articles.find((article) => article.id === id);
  },
};
