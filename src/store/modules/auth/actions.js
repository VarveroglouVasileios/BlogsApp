import router from "../../../router";

export default {
  async login(context, payload) {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDB87OurLtPuo9SNWD8G5QzlDOohD7LJ20",
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );
    const res = await response.json();
    if (!response.ok) {
      const error = new Error(res.message || "Failed to authenticate");
      throw error;
    }
    context.commit("setUser", {
      token: res.idToken,
      userId: res.localId,
      tokenExpiration: res.expiresIn,
    });
    router.push("/blogs"); // Redirect to the blogs page after successful login

    console.log(res); // log the response object
  },
  async signup(context, payload) {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDB87OurLtPuo9SNWD8G5QzlDOohD7LJ20",
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );
    const res = await response.json();
    if (!response.ok) {
      const error = new Error(res.message || "Failed to authenticate");
      throw error;
    }
    context.commit("setUser", {
      token: res.idToken,
      userId: res.localId,
      tokenExpiration: res.expiresIn,
    });
  },
  logout(context) {
    context.commit("setUser", {
      token: null,
      userId: null,
      tokenExpiration: null,
    });

    // Clear the authentication data from sessionStorage
    sessionStorage.removeItem("auth");
  },
  initializeAuth(context) {
    const authData = sessionStorage.getItem("auth");
    if (authData) {
      const auth = JSON.parse(authData);
      context.commit("setUser", auth);
    }
  },
};
