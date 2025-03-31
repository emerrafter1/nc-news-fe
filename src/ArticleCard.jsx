import React from "react";
import TimeAgo from "react-timeago";
import convertToISODate from "../utils";

function ArticleCard({ article }) {
  return (
    <li className="article-card">
    <div className="article-info">
      <p>{article.author}</p>
      <p>{article.title}</p>
      <p>
        <TimeAgo date={convertToISODate(article.created_at)} />
      </p>
      <p className="pill">{article.votes} votes</p>
      <p className="pill">{article.comment_count} comments</p>
      </div>
      <img src={article.article_img_url} alt={article.title} />
    </li>
  );
}

export default ArticleCard;
