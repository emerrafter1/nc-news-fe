import React from "react";
import TimeAgo from "react-timeago";
import {convertToISODate} from "../utils"
import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <li className="article-card">
      <Link to={`/articles/${article.article_id}`}>
        <div className="article-info">
          <div className="card-heading">
            <p className="topic">{article.topic}</p>
            <p>•</p>
            <p>
              <TimeAgo date={convertToISODate(article.created_at)} />
            </p>
          </div>
          <p className="author">{article.author}</p>

          <p>{article.title}</p>

          <p className="pill">{article.votes} votes</p>
          <p className="pill">{article.comment_count} comments</p>
        </div>
        <img src={article.article_img_url} alt={article.title} />
      </Link>
    </li>
  );
}

export default ArticleCard;
