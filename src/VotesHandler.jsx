import upArrow from "./assets/votes/upArrow.svg";
import downArrow from "./assets/votes/downArrow.svg";
import { useState } from "react";
import { updateArticleVotes } from "../api";

function VotesHandler({ article }) {
  const [optimisticVotes, setOptimisticVotes] = useState(0);
  const [error, setError] = useState(null);

  function handleClickVote(vote) {
    setOptimisticVotes((currOptimisticVotes) => {
      setError(null);
      return currOptimisticVotes + vote;
    });

    updateArticleVotes(article.article_id, vote).catch(() => {
      setOptimisticVotes((currOptimisticVotes) => {
        setError("Your vote was not successful. Please try again!");
        return currOptimisticVotes - vote;
      });
    });
  }

  return (
    <>
      <div className="votes">
        <button className="vote-button" onClick={() => handleClickVote(1)}>
          <img src={upArrow} />
        </button>
        <p>{article.votes + optimisticVotes} votes</p>
        <button className="vote-button" onClick={() => handleClickVote(-1)}>
          <img src={downArrow} />
        </button>
      </div>
      {error ? <p className="error">{error}</p> : null}
    </>
  );
}

export default VotesHandler;
