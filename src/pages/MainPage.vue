<template>
  <div class="container">
    <ul class="articles-list">
      <li v-for="article in truncatedArticles" :key="article.id">
        <h2 class="article-title">{{ article.title }}</h2>
        <p class="article-content">{{ article.content }}</p>
        <div class="article-actions">
          <div class="article-actions" v-if="article.userId === userId">
            <router-link
              :to="createBlogDetails(article.id)"
              class="btn btn-edit"
              >Edit</router-link
            >
            <button class="btn btn-delete" @click="deleteArticle(article.id)">
              Delete
            </button>
          </div>
          <router-link class="btn btn-details" :to="blogDetails(article.id)"
            >Details</router-link
          >
        </div>
      </li>
    </ul>
    <div class="categories-filter">
      <label
        v-for="category in categories"
        :key="category.value"
        class="category-label"
      >
        <input
          type="checkbox"
          :name="category.value"
          :value="category.value"
          v-model.trim="selectedCategories"
          autocomplete="off"
        />
        {{ category.label }}
      </label>
    </div>
    <button class="btn btn-find" @click="findArticles">Find</button>
    <div class="create-blog">
      <router-link :to="createBlog" class="btn btn-create"
        >Create Blog</router-link
      >
    </div>
    <button @click="loadArticles">Refresh</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategories: [],
      categories: [
        { value: "Technology", label: "Technology" },
        { value: "Politics", label: "Politics" },
        { value: "Sports", label: "Sports" },
        { value: "Travel", label: "Travel" },
        { value: "Food", label: "Food" },
        {
          value: "Business & Entreprenuership",
          label: "Business & Entreprenuership",
        },
        { value: "Health & Wellness", label: "Health & Wellness" },
        { value: "Fashion", label: "Fashion" },
        { value: "Lifestyle", label: "Lifestyle" },
        { value: "Education", label: "Education" },
        { value: "Finance", label: "Finance" },
        { value: "Entertainment", label: "Entertainment" },
        { value: "Parenting", label: "Parenting" },
      ],
    };
  },

  created() {
    this.loadArticles();
  },

  computed: {
    createBlog() {
      return "/createBlog";
    },
    userId() {
      return this.$store.getters["auth/userId"];
    },
    articles() {
      return this.$store.getters["articles/getArtictles"];
    },
    truncatedArticles() {
      return this.articles.map((article) => {
        return {
          ...article,
          content:
            article.content && article.content.length > 50
              ? article.content.substring(0, 50) + "..."
              : article.content,
        };
      });
    },
  },

  methods: {
    loadArticles() {
      // Dispatch the loadArticles action to reload the articles
      this.$store.dispatch("articles/loadArticles").then(() => {
        console.log("Main page articles:", this.articles);
      });
    },

    deleteArticle(id) {
      console.log("ID to delete:", id);
      this.$store.dispatch("articles/deleteArticle", id);
    },
    blogDetails(id) {
      return this.$route.path + "/" + id;
    },
    createBlogDetails(id) {
      return "/createBlogDetails" + "/" + id;
    },
    findArticles() {
      this.$store.dispatch(
        "articles/setSelectedCategories",
        this.selectedCategories
      );
    },
  },
};
</script>
<style scoped>
/* Main Container */
.container {
  font-family: "Arial", sans-serif;
  padding: 30px;
  background-color: #2b2b2b;
  color: #e0e0e0;
  border-radius: 5px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
}

/* Category Filters - Moved to the top with style */
.categories-filter {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: #1f1f1f;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.categories-filter .category-label {
  display: flex;
  align-items: center;
  margin-right: 10px;
  padding: 5px 10px;
  cursor: pointer;
  border: 1px solid #e67e22;
  border-radius: 20px;
  transition: background-color 0.2s;
}

.categories-filter .category-label:hover {
  background-color: #333;
}

.categories-filter input[type="checkbox"] {
  margin-right: 5px;
}

/* Article List Styles */
.articles-list li {
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  background-color: #333;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

/* Article Actions */
.articles-list .article-actions {
  gap: 15px;
  margin-top: 15px;
}

.btn {
  outline: none;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  background: linear-gradient(45deg, #e67e22, #f39c12);
  color: #fff;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
}

.btn-edit {
  outline: none;
  list-style: none;
  background: linear-gradient(45deg, #2980b9, #3498db);
  margin-right: 1rem;
}

.btn-delete {
  background: linear-gradient(45deg, #c0392b, #e74c3c);
  margin-right: 1rem;
}

.btn-details {
  background: linear-gradient(45deg, #2c3e50, #34495e);
}

.btn-details:hover {
  background: linear-gradient(45deg, #1a2836, #273747);
}

/* Main Find Button */
.btn-find {
  display: block;
  margin-top: 20px;
  width: 100%;
}

/* Create Blog Link */
.create-blog {
  margin-top: 30px;
}

.create-blog .btn-create {
  text-align: center;
  width: 100%;
  display: block;
}

.create-blog .btn-create:hover {
  background-color: #d35400;
}
</style>
