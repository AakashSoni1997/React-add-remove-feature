import React, { useState } from "react";
import Modal from "./Modal";
import BackDrop from "./BackDrop";

const Todos = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleDelete = () => {
    setModalIsOpen(true);
  };
  const handleModalDrop = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={handleModalDrop} onConfirm={handleModalDrop} />
      )}
      {modalIsOpen && <BackDrop onClick={handleModalDrop} />}
    </div>
  );
};

export default Todos;
