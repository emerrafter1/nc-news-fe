import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-7xob.onrender.com/api",
});

function getArticles() {
  return api.get("/articles").then(({ data }) => {
    return data.articles;
  });
}

function getSingleArticle(articleId) {
  return api.get(`/articles/${articleId}`).then(({ data }) => {
    return data.article;
  });
}

function getComments(articleId) {
    return api.get(`/articles/${articleId}/comments`).then(({ data }) => {
      return data.comments;
    });
  }

export { getArticles, getSingleArticle, getComments };
