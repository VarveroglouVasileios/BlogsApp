<template>
  <div class="articles-wrapper">
    <div
      class="article-container"
      v-for="article in articles"
      :key="article.id"
    >
      <img :src="article.imageUrl" alt="Article Image" class="article-image" />
      <h2 class="article-title">{{ article.title }}</h2>
      <p class="article-content">{{ article.content }}</p>
      <p class="article-date">{{ article.date }}</p>
      <span class="article-category">{{ article.category }}</span>
    </div>
  </div>
  <button class="go-back-btn" @click="goBack">Go back</button>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("articles/loadArticles");
  },
  methods: {
    goBack() {
      console.log("Going back to main page");
      this.$router.push("/blogs");
    },
  },

  computed: {
    articles() {
      const articles = this.$store.getters["articles/getArtictles"].filter(
        (item) => item.id === this.id
      );
      console.log("Details page articles:", articles);
      return articles;
    },
  },
};
</script>

<style scoped>
.articles-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
}

.article-container {
  width: 80%;
  background-color: #ffffff;
  margin-bottom: 40px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  padding: 20px;
  border: 1px solid #ecf0f1; /* Outer border */
}

.article-container:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.article-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 20px;
  border-bottom: 2px solid #ecf0f1; /* Divider */
}

.article-title {
  font-size: 28px;
  margin: 20px 0;
  color: #2c3e50;
  border-bottom: 2px solid #ecf0f1; /* Divider */
  padding-bottom: 10px;
}

.article-content {
  font-size: 18px;
  margin: 20px 0;
  color: #34495e;
  line-height: 1.6;
  border-bottom: 2px solid #ecf0f1; /* Divider */
  padding-bottom: 10px;
}

.article-date {
  font-size: 16px;
  color: #7f8c8d;
  margin: 20px 0;
  border-bottom: 2px solid #ecf0f1; /* Divider */
  padding-bottom: 10px;
}

.article-category {
  font-size: 16px;
  color: #ffffff;
  background-color: #3498db;
  padding: 6px 12px;
  border-radius: 20px;
  margin-top: 10px;
}

.go-back-btn {
  padding: 12px 25px;
  background-color: #e74c3c;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.go-back-btn:hover {
  background-color: #c0392b;
}
</style>
