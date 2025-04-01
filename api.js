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

function updateArticleVotes(articleId, votes){
    return api.patch(`/articles/${articleId}`, {
        "inc_votes": votes
        }).then(({data}) => {
            return data.article;
        }) 
}

function postComment(articleId, body){
    return api.post(`/articles/${articleId}/comments`, {username: "happyamy2016", body: body}).then(({data}) => {
        console.log(data)
        return data.comment;
    })
}

export { getArticles, getSingleArticle, getComments, updateArticleVotes, postComment };
