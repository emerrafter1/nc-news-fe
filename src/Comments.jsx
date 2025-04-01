import { getComments } from "../api";
import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";

function Comments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    getComments(article_id)
      .then((data) => {
        setComments(data);
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
    <section className="comments-list">
      <h2>Comments</h2>
      <ul>
        {comments.length > 0 
        ? comments.map((comment) => {
          return <CommentCard comment={comment} key={comment.comment_id} />;
        }) : <p>There are not comments yet.</p>}
      </ul>
    </section>
  );
}

export default Comments;
