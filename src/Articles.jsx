import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import useApiRequest from "./useApiRequest";
import LoadingSpinner from "./LoadingSpinner";
import { useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";

function Articles() {
  const { topic } = useParams();
  const [sortBy, setSortBy] = useState(null);
  const [sortByLabel, setSortByLabel] = useState(null);
  const [orderBy, setOrderBy] = useState(null);

  const sortByOptions = [
    "Most recent",
    "Oldest",
    "Highest comment count",
    "Lowest comment count",
    "Most votes",
    "Least votes",
  ];

  const {
    data: articles,
    isLoading,
    error,
  } = useApiRequest(getArticles, topic, sortBy, orderBy);

  if (error) return <p className="error">Oops! Something went wrong...</p>;

  if (isLoading) {
    return <LoadingSpinner loadingMessage={`Loading articles...`} />;
  }

  const handleSortByClick = (event) => {
    switch (event.target.innerText) {
      case "Most recent":
        setSortByLabel("Most recent");
        setSortBy(null);
        setOrderBy(null);
        break;
      case "Oldest":
        setSortByLabel("Oldest");
        setSortBy(null);
        setOrderBy("ASC");
        break;
      case "Highest comment count":
        setSortByLabel("Highest comment count");
        setSortBy("comment_count");
        setOrderBy(null);
        break;
      case "Lowest comment count":
        setSortByLabel("Lowest comment count");
        setSortBy("comment_count");
        setOrderBy("ASC");
        break;
      case "Most votes":
        setSortByLabel("Most votes");
        setSortBy("votes");
        setOrderBy(null);
        break;
      case "Least votes":
        setSortByLabel("Least votes");
        setSortBy("votes");
        setOrderBy("ASC");
        break;
      default:
        break;
    }
  };

  return (
    <section className="articles-list">
      {topic ? <p className="topic-heading">{topic}</p> : null}
      <DropdownButton
        id="sort-by-dropdown"
        title={sortByLabel ? sortByLabel : "Sort by"}
      >
        {sortByOptions.map((option) => {
          return (
            <Dropdown.Item onClick={handleSortByClick}>{option}</Dropdown.Item>
          );
        })}
      </DropdownButton>

      <ul className="article-list">
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </ul>
    </section>
  );
}

export default Articles;
