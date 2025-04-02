import { useParams } from "react-router-dom";
import { getSingleArticle } from "../api";
import { useState, useEffect } from "react";
import {convertToISODate} from "../utils";
import TimeAgo from "react-timeago";
import Comments from "./Comments";
import VotesHandler from "./VotesHandler.jsx";
import useApiRequest from "./useApiRequest.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";

function SingleArticle() {
  const { article_id } = useParams();

  const {
    data: article,
    isLoading,
    error,
  } = useApiRequest(getSingleArticle, article_id);

  if (error) return <p className="error">Oops! Something went wrong...</p>;

  if (isLoading) {
    return <LoadingSpinner loadingMessage={`Loading article...`} />;
  }

  return (
    <div className="single-article">
      <div className="card-heading">
        <p className="topic">{article.topic}</p>
        <p>•</p>
        <p>
          <TimeAgo date={convertToISODate(article.created_at)} />
        </p>
        </div>
        <p className="author">{article.author}</p>
      
      <p>{article.title}</p>
      <p>{article.body}</p>

      <img src={article.article_img_url} />
      <div className="reactions">
        <VotesHandler article={article} />

        <p className="pill">{article.comment_count} comments</p>
      </div>

      <Comments article_id={article.article_id} />
    </div>
  );
}

export default SingleArticle;
