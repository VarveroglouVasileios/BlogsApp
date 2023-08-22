<template>
  <div v-if="article">
    <form @submit.prevent="sendData" class="form">
      <!-- Title -->
      <div class="control__form">
        <label for="title">Title</label>
        <input type="text" name="title" v-model.trim="article.title" />
        <!-- ... Validation messages for title ... -->
      </div>
      <!-- ImageUrl -->
      <div class="control__form">
        <label for="imageUrl">ImageUrl</label>
        <input type="text" name="imageUrl" v-model.trim="article.imageUrl" />
        <!-- ... Validation messages for imageUrl ... -->
      </div>
      <!-- Content -->
      <div class="control__form">
        <label for="content">Content</label>
        <textarea
          name="content"
          cols="50"
          rows="10"
          v-model.trim="article.content"
        ></textarea>
        <!-- ... Validation messages for content ... -->
      </div>
      <!-- Date -->
      <div class="control__form">
        <label for="date">Date</label>
        <input type="date" name="date" v-model="article.date" />
        <!-- ... Validation messages for date ... -->
      </div>
      <!-- Category -->
      <div class="form__control">
        <select name="options" v-model.trim="article.category">
          <option value="default">Select Category</option>
          <option value="Technology">Technology</option>
          <option value="Travel">Travel</option>
          <option value="Food">Food</option>
          <option value="Fashion">Fashion</option>
          <option value="Health & Wellness">Health & Wellness</option>
          <option value="Finance">Finance</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Education">Education</option>
          <option value="Business & Entreprenuership">
            Business & Entreprenuership
          </option>
          <option value="Parenting">Parenting</option>
          <option value="Sports">Sports</option>
          <option value="Politics">Politics</option>
        </select>
        <!-- ... Validation messages for category ... -->
      </div>

      <div class="form_btn">
        <button>Submit</button>
      </div>
    </form>
  </div>
  <router-link to="/blogs">Go back</router-link>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      article: null,
    };
  },
  computed: {
    formattedDate: {
      get() {
        if (this.article && this.article.date) {
          return new Date(this.article.date).toISOString;
        }
        return "";
      },
      set(newValue) {
        if (this.article) {
          this.article.date = newValue;
        }
      },
    },
    articles() {
      return this.$store.getters["articles/getArtictles"].filter(
        (item) => item.id === this.id
      );
    },
  },
  watch: {
    articles(newVal) {
      if (newVal && newVal.length > 0) {
        this.article = newVal[0];
      }
    },
  },
  created() {
    this.$store.dispatch("articles/loadArticles");
  },
  methods: {
    sendData() {
      const data = {
        id: this.id,
        title: this.article.title,
        imageUrl: this.article.imageUrl,
        content: this.article.content,
        date: this.article.date,
        category: this.article.category,
      };
      this.$store.dispatch("articles/editArticles", data);
    },
  },
};
</script>

<style scoped>
.form {
  width: 60%;
  margin: 4rem auto;
  padding: 2rem;
  background-color: #f4f4f4;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
}

.control__form {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.control__form label {
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.control__form input,
.control__form textarea {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 1rem;
}

.control__form p {
  margin: 0.25rem 0;
  color: #e3342f;
  font-weight: bold;
}

.form_btn button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 3px;
  background-color: #3490dc;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
}

.form_btn button:hover {
  background-color: #227dc7;
}

p {
  margin: 0.5rem 0;
}

p[role="alert"] {
  color: #e3342f; /* red */
  font-weight: bold;
  margin-top: 0.25rem;
}
</style>
