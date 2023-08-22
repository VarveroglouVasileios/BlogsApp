import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import BaseBadge from "./ui/BaseBadge.vue";
import BaseButton from "./ui/BaseButton.vue";
import BaseCard from "./ui/BaseCard.vue";
import BaseDialog from "./ui/BaseDialog.vue";
import BaseSpinner from "./ui/BaseSpinner.vue";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

// Initialize the authentication state from sessionStorage
store.dispatch("auth/initializeAuth");

// ... rest of your code ...

library.add(faFacebookF, faTwitter, faInstagram, faLinkedinIn);
// ... rest of your code ...

const app = createApp(App);

app.component("base-badge", BaseBadge);
app.component("base-card", BaseCard);
app.component("base-dialog", BaseDialog);
app.component("base-spinner", BaseSpinner);
app.component("base-button", BaseButton);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("library-font", library);
app.component("faUserSecret", faUserSecret);

app.use(router);
app.use(store);

app.mount("#app");
