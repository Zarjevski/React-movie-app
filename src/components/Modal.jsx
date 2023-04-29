import React from "react";
import { useModalContext } from "../context/ModalProvider";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ type }) => {
  const { mediaSrc, showModal, closeModal } = useModalContext();
  if (showModal) {
    return (
      <div className="modal-overlay" onClick={() => closeModal()}>
        <AiOutlineClose/>
        {type === "images" ? (
          <img className="modal-image" src={mediaSrc} alt="backdrop" />
        ) : type === "videos" ? (
          <iframe
            className="modal-video"
            allowFullScreen={true}
            src={mediaSrc}
            title="video"
          ></iframe>
        ) : null}
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
