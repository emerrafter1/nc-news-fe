import { getComments } from "../api";

import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";
import useApiRequest from "./useApiRequest";
import LoadingSpinner from "./LoadingSpinner";

function Comments({ article_id }) {
  const {
    data: comments,
    isLoading,
    error,
    setData: setComments,
  } = useApiRequest(getComments, article_id);

  if (error) return <p className="error">Oops! Something went wrong... </p>;

  if (isLoading) {
    return <LoadingSpinner loadingMessage={`Loading comments...`} />;
  }

  return (
    <section className="comments-list">
      <h2>Comments</h2>
      <CommentAdder
        comments={comments}
        setComments={setComments}
        article_id={article_id}
      />

      <ul className="comment-list">
        {comments.length > 0 ? (
          comments.map((comment) => {
            return <CommentCard comment={comment} key={comment.comment_id} />;
          })
        ) : (
          <p>There are no comments yet.</p>
        )}
      </ul>
    </section>
  );
}

export default Comments;
