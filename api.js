import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-7xob.onrender.com/api",
});

function getArticles(topic, sortBy, orderBy) {
  let url = "/articles";
  if (topic) {
    url += `?topic=${topic}`;
  }

  if (sortBy) {
    url += topic ? `&sort_by=${sortBy}` : `?sort_by=${sortBy}`;
  }

  if (orderBy) {
    url += topic || sortBy ? `&order=${orderBy}` : `?order=${orderBy}`;
  }

  return api.get(url).then(({ data }) => {
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

function updateArticleVotes(articleId, votes) {
  return api
    .patch(`/articles/${articleId}`, {
      inc_votes: votes,
    })
    .then(({ data }) => {
      return data.article;
    });
}

function postComment(articleId, body) {
  return api
    .post(`/articles/${articleId}/comments`, {
      username: "happyamy2016",
      body: body,
    })
    .then(({ data }) => {
      return data.comment;
    });
}

function deleteComment(commentId) {
  return api.delete(`/comments/${commentId}`).then(() => {
    return "Your comment has been successfully deleted.";
  });
}

function getTopics() {
  return api.get(`/topics`).then(({ data }) => {
    return data.topics;
  });
}

export {
  getArticles,
  getSingleArticle,
  getComments,
  updateArticleVotes,
  postComment,
  deleteComment,
  getTopics,
};
