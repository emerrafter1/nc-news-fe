import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import useApiRequest from "./useApiRequest";
import LoadingSpinner from "./LoadingSpinner";
import { useParams } from "react-router-dom";

function Articles() {
  const { topic } = useParams();

  const {
    data: articles,
    isLoading,
    error,
  } = useApiRequest(getArticles, topic);

  if (error) return <p className="error">Oops! Something went wrong...</p>;

  if (isLoading) {
    return <LoadingSpinner loadingMessage={`Loading articles...`} />;
  }

  return (
    <section className="articles-list">
      {topic ? <p className="topic-heading">{topic}</p> : null}

      <ul className="article-list">
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </ul>
    </section>
  );
}

export default Articles;
