import React from "react";

const Modal = (props) => {
  function cancelHandler() {
    props.onCancel();
  }
  const confirmHandler = () => {
    props.onConfirm();
  };

  return (
    <div className="modal">
      <p>Are You Srue </p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        confirm{" "}
      </button>
    </div>
  );
};

export default Modal;
