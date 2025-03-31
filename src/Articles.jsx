import { getArticles } from "../api";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    getArticles()
      .then((data) => {
        console.log(data);
        setArticles(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (error) return <p>Oops!</p>;

  if (isLoading) return <p>Just a sec ...</p>;

  return (
    <section className="articles-list">
      <ul>
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id}/>;
        })}
      </ul>
    </section>
  );
}

export default Articles;
