import React, { useContext, useState, useEffect } from "react";
import TimeAgo from "react-timeago";
import convertToISODate from "../utils";
import { UserContext } from "./contexts/User.jsx";
import { deleteComment } from "../api";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ToastMessage from "./Toast.jsx";

function CommentCard({ comment }) {
  const { loggedInUser } = useContext(UserContext);
  const [showDeleteCommentModal, setShowDeleteCommentModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [hideComment, setHideComment] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteCommentModal(true);
  };

  const handleCloseModal = () => {
    setShowDeleteCommentModal(false);
  };

  function handleDeleteComment() {
    deleteComment(comment.comment_id)
      .then(() => {
        setToastMessage("Your comment has been successfully deleted!");
        setHideComment(true);
      })
      .catch(() => {
        setToastMessage("Your comment failed to delete. Please try again.");
      })
      .finally(() => {
        setShowDeleteCommentModal(false);
        setShowToast(true);
      });

    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  }

  return (
    <>
      {hideComment ? null : (
        <li className="comment-card">
          <p className="author">{comment.author}</p>
          <p>
            <TimeAgo date={convertToISODate(comment.created_at)} />
          </p>
          <p>{comment.body}</p>
          <div className="reactions">
            <p className="pill">{comment.votes} votes</p>
          </div>
          {loggedInUser === comment.author && (
            <button
              className="delete-comment-button"
              onClick={handleDeleteClick}
            >
              Delete comment
            </button>
          )}
        </li>
      )}
      <Modal show={showDeleteCommentModal} onHide={handleCloseModal}>
        <Modal.Body className="modal-body">
          Are you sure you want to delete this comment?
        </Modal.Body>

        <button className="modal-button" onClick={handleCloseModal}>
          Cancel
        </button>
        <button className="modal-button" onClick={handleDeleteComment}>
          Delete
        </button>
      </Modal>
      <ToastMessage show={showToast} message={toastMessage} />
    </>
  );
}

export default CommentCard;
