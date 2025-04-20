import React, { useContext, useState, useEffect } from "react";
import TimeAgo from "react-timeago";
import {convertToISODate} from "../utils";
import { UserContext } from "./contexts/User.jsx";
import { deleteComment } from "../api";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ToastMessage from "./Toast.jsx";
import binIcon from "./assets/binIcon.svg"

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
    }, 3000);
  }

  return (
    <>
      {hideComment ? null : (
        <li className="comment-card">
          <div className="comment-details">
          <div className="card-heading">
            <p className="author">{comment.author}</p> <p>•</p>
            <p>
              <TimeAgo date={convertToISODate(comment.created_at)} />
            </p>
          </div>
          <p>{comment.body}</p>
          <div className="reactions">
            <div className="votes">{comment.votes} votes</div>
          </div>
          </div>
          {loggedInUser.username === comment.author && (
            <button
              className="delete-comment-button"
              onClick={handleDeleteClick}
            >
              <img src={binIcon}/>
            </button>
          )}
        </li>
      )}
      <Modal show={showDeleteCommentModal} onHide={handleCloseModal}>
        <Modal.Body className="modal-body">
          Are you sure you want to delete this comment?
        </Modal.Body>
<div className="modal-options">
        <button className="modal-button" onClick={handleCloseModal}>
          Cancel
        </button>
        <button className="delete-modal-button" onClick={handleDeleteComment}>
          Delete
        </button>
        </div>
      </Modal>
      <ToastMessage show={showToast} message={toastMessage} />
    </>
  );
}

export default CommentCard;
