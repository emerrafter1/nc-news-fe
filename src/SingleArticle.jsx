import { useParams } from "react-router-dom";
import { getSingleArticle } from "../api";
import { useState, useEffect } from "react";
import convertToISODate from "../utils";
import TimeAgo from "react-timeago";
import Comments from "./Comments";
import VotesHandler from "./VotesHandler.jsx";

function SingleArticle() {
  const { article_id } = useParams();

  const [article, setArticle] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    getSingleArticle(article_id)
      .then((data) => {
        setArticle(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (error) return <p className="error">Oops!</p>;

  if (isLoading) return <p>Just a sec ...</p>;

  return (
    <div className="single-article">
      <p>{article.topic}</p>
      <p className="author">{article.author}</p>
      <p>
        <TimeAgo date={convertToISODate(article.created_at)} />
      </p>
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
