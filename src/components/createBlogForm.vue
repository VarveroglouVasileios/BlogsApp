<template>
  <div>
    <form @submit.prevent="sendData" class="form">
      <div class="control__form">
        <label for="title">Title</label>
        <input
          type="text"
          name="title"
          v-model.trim="enteredTitle.val"
          @blur="clearValidity('enteredTitle')"
        />
        <p role="alert" v-if="!enteredTitle.isValid && enteredTitle.val === ''">
          The title cannot be empty!!
        </p>
        <p
          role="alert"
          v-if="!enteredTitle.isValid && enteredTitle.val.length < 5"
        >
          The title must be at least 5 characters.
        </p>
      </div>
      <div class="control__form">
        <label for="imageUrl">ImageUrl</label>
        <input
          type="text"
          name="imageUrl"
          v-model.trim="enteredimageUrl.val"
          @blur="clearValidity('enteredimageUrl')"
        />
        <p
          role="alert"
          v-if="!enteredimageUrl.isValid && enteredimageUrl.val === ''"
        >
          The title cannot be empty!!
        </p>
        <p
          role="alert"
          v-if="!enteredimageUrl.isValid && enteredimageUrl.val.length < 5"
        >
          The title must be at least 8 characters.
        </p>
      </div>
      <div class="control__form">
        <label for="content">Content</label>
        <textarea
          name="content"
          cols="50"
          rows="10"
          v-model.trim="enteredContent.val"
          @blur="clearValidity('enteredContent')"
        ></textarea>
        <p
          role="alert"
          v-if="!enteredContent.isValid && enteredContent.val === ''"
        >
          The title cannot be empty!!
        </p>
        <p
          role="alert"
          v-if="!enteredContent.isValid && enteredContent.val.length < 20"
        >
          The title must be at least 20 characters.
        </p>
      </div>
      <div class="control__form">
        <label for="date">Date</label>
        <input
          type="date"
          name="date"
          v-model="enteredDate.val"
          @blur="clearValidity('enteredDate')"
        />
        <p role="alert" v-if="!enteredDate.isValid && enteredDate.val === ''">
          The title cannot be empty!!
        </p>
        <p
          role="alert"
          v-if="!enteredDate.isValid && enteredDate.val.length < 5"
        >
          The title must be at least 20 characters.
        </p>
      </div>
      <div class="form__control">
        <select name="options" v-model.trim="selectedOption.val">
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
        <p role="alert" v-if="!selectedOption.isValid">
          The Options cannot be empty.
        </p>
      </div>
      <div class="form_btn">
        <button>Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["saveData"],
  data() {
    return {
      enteredTitle: {
        val: "",
        isValid: true,
      },
      enteredContent: {
        val: "",
        isValid: true,
      },
      enteredDate: {
        val: "",
        isValid: true,
      },
      enteredimageUrl: {
        val: "",
        isValid: true,
      },
      selectedOption: {
        val: "",
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validate() {
      this.formIsValid = true;
      if (this.enteredTitle.val === "" || this.enteredTitle.val.length < 6) {
        this.formIsValid = false;
        this.enteredTitle.isValid = false;
      }
      if (
        this.enteredimageUrl.val === "" ||
        this.enteredimageUrl.val.length < 8
      ) {
        this.formIsValid = false;
        this.enteredimageUrl.isValid = false;
      }
      if (
        this.enteredContent.val === "" ||
        this.enteredContent.val.length < 20
      ) {
        this.formIsValid = false;
        this.enteredContent.isValid = false;
      }
      if (this.enteredDate.val === "") {
        this.formIsValid = false;
        this.enteredDate.isValid = false;
      }
      if (this.selectedOption === "") {
        this.formIsValid = false;
        this.selectedOption.isValid = false;
      }
    },
    sendData() {
      this.validate();
      if (!this.formIsValid) {
        return;
      }
      const data = {
        title: this.enteredTitle.val,
        content: this.enteredContent.val,
        date: new Date(this.enteredDate.val),
        imageUrl: this.enteredimageUrl.val,
        category: this.selectedOption.val,
      };
      console.log(this.selectedOption.val);
      console.log(data);
      this.$emit("saveData", data);
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
