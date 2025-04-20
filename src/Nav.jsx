import { Link } from "react-router-dom";
import { getTopics } from "../api";
import useApiRequest from "./useApiRequest";

function Nav() {
  const { data: topics } = useApiRequest(getTopics);
  return (
    <nav id="sideNav">
      <ul id="topics-list">
        <li className="topic-item" key="all-topics">
          <Link to="/">All</Link>
        </li>
        {(topics || []).map((topicItem) => {
          return (
            <li className="topic-item" key={topicItem.slug}>
              <Link
                to={`/articles/topic/${topicItem.slug}`}
                className="topic-button"
              >
                {topicItem.slug}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
