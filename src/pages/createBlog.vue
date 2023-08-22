<template>
  <createBlogForm @saveData="addArticle"></createBlogForm>
</template>

<script>
import createBlogForm from "../components/createBlogForm.vue";
export default {
  components: { createBlogForm },
  methods: {
    addArticle(data) {
      this.$store.dispatch("articles/createArticle", data);
      console.log("data send", data);
      this.$router.replace("/blogs");
    },
  },
};
</script>
