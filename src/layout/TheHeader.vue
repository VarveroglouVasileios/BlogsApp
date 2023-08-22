<template>
  <div class="header">
    <div class="header__text">
      <h1 class="header__title">TheBloggers!</h1>
    </div>
    <div class="header__search">
      <input
        type="search"
        name="search"
        id="search"
        v-model.trim="enteredSearch"
        placeholder="Search For blogs!"
        @input="searchBlogs"
      />
    </div>
    <div>
      <button class="logout-button" v-if="isAuthenticated" @click="logout">
        Logout
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enteredSearch: "",
    };
  },
  methods: {
    searchBlogs() {
      this.$store.commit("articles/filterArticles", this.enteredSearch);
    },
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/auth");
    },
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters["auth/isAuthenticated"];
    },
  },
};
</script>

<style scoped>
.logout-button {
  background-color: #f44336; /* Red background */
  border: none; /* Remove borders */
  color: white; /* White text */
  padding: 12px 24px; /* Some padding */
  text-align: center; /* Centered text */
  text-decoration: none; /* Remove underline */
  display: inline-block; /* Inline-block */
  font-size: 16px; /* Change text size */
  margin: 4px 2px; /* Some margin */
  cursor: pointer; /* Pointer/hand icon */
  border-radius: 12px; /* Rounded corners */
  transition: all 0.3s; /* Smooth transitions on hover */
}

.logout-button:hover {
  background-color: #da190b; /* Darker red on hover */
  color: #f1f1f1; /* Lighter text on hover */
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: #494343;
}

.header__text {
  color: #fff;
}

.header__title {
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 1px;
  color: #fff;
}

.header__search input {
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  width: 200px;
  transition: all 0.5s ease;
}

.header__search input:focus {
  outline: none;
  width: 20rem;
}

.header__search input::placeholder {
  color: #aaa;
}

.header__search input {
  background: #fff;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
}
</style>
