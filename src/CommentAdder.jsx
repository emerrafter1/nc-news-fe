import { postComment } from "../api";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

function CommentAdder({ comments, setComments, article_id }) {
  const [commentInput, setCommentInput] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleAddComment(event) {
    setIsLoading(true);
    setError(null);
    event.preventDefault();
    if (commentInput.trim().length < 1) {
      setIsLoading(false);
      return setError("Comment cannot be empty!");
    }
    postComment(article_id, commentInput)
      .then((addedComment) => {
        setCommentInput("");
        setComments([addedComment, ...comments]); //comment goes to top
      })
      .catch(() => {
        setError("Your comment failed to post! Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  if (isLoading) {
    return <LoadingSpinner loadingMessage={`Adding comment...`} />;
  }

  function handleCommentInputChange(event) {
    setCommentInput(event.target.value);
  }

  return (
    <form id="add-comment-form" onSubmit={handleAddComment}>
      <div className="comment-form-elements">
      <textarea
        placeholder="Add a comment"
        value={commentInput}
        onChange={handleCommentInputChange}
      ></textarea>
      {error ? <p className="error">{error}</p> : null}
      <button type="submit">Comment</button>
      </div>
    </form>
  );
}

export default CommentAdder;
