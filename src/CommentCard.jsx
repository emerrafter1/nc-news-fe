import React from "react";
import TimeAgo from "react-timeago";
import convertToISODate from "../utils";

function CommentCard({ comment }) {
  return (
    <li className="comment-card">
      <p className="author">{comment.author}</p>
      <p>
        <TimeAgo date={convertToISODate(comment.created_at)} />
      </p>
      <p>{comment.body}</p>
      <div className="reactions">
        <p className="pill">{comment.votes} votes</p>
      </div>
    </li>
  );
}

export default CommentCard;
