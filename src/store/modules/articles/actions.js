import db from "../../../firebase";
export default {
  createArticle(context, payload) {
    const userId = context.rootGetters["auth/userId"];
    const data = {
      userId: userId,
      title: payload.title,
      content: payload.content,
      imageUrl: payload.imageUrl,
      date: payload.date,
      category: payload.category,
    };
    const ArticleRef = db.collection("Articles");

    ArticleRef.add(data);

    context.commit("createArticle", data);
  },
  async loadArticles(context) {
    console.log("loadArticles action is being called");
    console.log("Fetching articles...");
    const snapshot = await db.collection("Articles").get();
    const articles = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("Articles fetched:", articles); // Add this line
    context.commit("loadArticles", articles);
  },

  async editArticles(context, payload) {
    const userId = context.rootGetters["auth/userId"];
    const data = {
      userId: userId,
      title: payload.title,
      content: payload.content,
      imageUrl: payload.imageUrl,
      date: payload.date,
      category: payload.category,
    };
    const articleRef = db.collection("Articles").doc(payload.id);

    try {
      await articleRef.update(data);
      console.log("Document successfully updated!");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  },
  async deleteArticle(context, payload) {
    console.log(payload);
    const articleRef = db.collection("Articles").doc(payload);

    try {
      await articleRef.delete();
      console.log("Document successfully deleted!", payload);
    } catch (error) {
      console.error("Error deleted document: ", error);
    }
    context.commit("deletedArticle", payload);
  },
};
