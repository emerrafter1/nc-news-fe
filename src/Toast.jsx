import React from "react";
import { Toast } from "react-bootstrap";

function ToastMessage({ show, message }) {
  return (
    <>
      {show && message ? (
        <Toast className="toast">
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      ) : null}
    </>
  );
}

export default ToastMessage;
