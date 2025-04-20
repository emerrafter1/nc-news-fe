import React from "react";
import TimeAgo from "react-timeago";
import { convertToISODate } from "../utils";
import { Link } from "react-router-dom";
import commentIcon from "./assets/commentIcon.svg"

function ArticleCard({ article }) {
  return (
    <li className="article">
      <Link to={`/articles/${article.article_id}`}>


<div className="article-info">
       
          <div className="card-heading">
            <p className="topic">{article.topic}</p>
            <p>•</p>
            <p className="article-time">
              <TimeAgo date={convertToISODate(article.created_at)} />
            </p>
          </div>

          <p className="author">{article.author}</p>

          </div>

          <p className="article-title">{article.title}</p>
          <img src={article.article_img_url} alt={article.title} className="article-img" />



          <div className="reactions">
          <div className="pill">{article.votes} votes</div>
          <div className="pill"><img src={commentIcon}/> {article.comment_count}</div></div>
      
      </Link>
    </li>
  );
}

export default ArticleCard;
