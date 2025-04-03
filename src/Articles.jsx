import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import useApiRequest from "./useApiRequest";
import LoadingSpinner from "./LoadingSpinner";
import ErrorComponent from "./ErrorComponent";
import { useParams, useSearchParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useEffect, useState } from "react";
import { getSortByLabel } from "../utils";


function Articles() {
  const { topic } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  const [sortBy, setSortBy] = useState(searchParams.get("sort_by"));
  const [order, setOrder] = useState(searchParams.get("order"));
  const [sortByLabel, setSortByLabel] = useState(getSortByLabel(sortBy, order));

  useEffect(() => {
    const currentSortBy = searchParams.get("sort_by");
    const currentOrder = searchParams.get("order");

    setSortBy(currentSortBy);
    setOrder(currentOrder);

    setSortByLabel(getSortByLabel(currentSortBy, currentOrder));
  }, [searchParams]);

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
  } = useApiRequest(getArticles, topic, sortBy, order);

  if (error) return (<ErrorComponent error={error}/>);

  if (isLoading) {
    return <LoadingSpinner loadingMessage={`Loading articles...`} />;
  }

  const handleSortByClick = (event) => {
    const params = new URLSearchParams(searchParams);
    switch (event.target.innerText) {
      case "Most recent":
        params.delete("sort_by");
        params.delete("order");
        break;
      case "Oldest":
        params.delete("sort_by");
        params.set("order", "ASC");
        break;
      case "Highest comment count":
        params.set("sort_by", "comment_count");
        params.delete("order");
        break;
      case "Lowest comment count":
        params.set("sort_by", "comment_count");
        params.set("order", "ASC");
        break;
      case "Most votes":
        params.set("sort_by", "votes");
        params.delete("order");
        break;
      case "Least votes":
        params.set("sort_by", "votes");
        params.set("order", "ASC");
        break;
      default:
        break;
    }

    setSearchParams(params);
  };

  return (
    <section className="articles-list">
      <p>Test deploy</p>
      {topic ? <p className="topic-heading">{topic}</p> : null}
      <DropdownButton
        id="sort-by-dropdown"
        title={sortByLabel ? sortByLabel : "Sort by"}
      >
        {sortByOptions.map((option) => {
          return (
            <Dropdown.Item key={option} onClick={handleSortByClick}>
              {option}
            </Dropdown.Item>
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
