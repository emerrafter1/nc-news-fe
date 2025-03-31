import React from "react";
import TimeAgo from "react-timeago";
import convertToISODate from "../utils";
import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <li className="article-card">
    <div className="article-info">
      <p className="author">{article.author}</p>
      <p><Link to={`/articles/${article.article_id}`}>{article.title}</Link></p>
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
