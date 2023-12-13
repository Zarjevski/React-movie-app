import React from "react";

const ModalContext = React.createContext();

const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [mediaSrc, setMediaSrc] = React.useState("");
  const displayModal = (src) => {
    setMediaSrc(src);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setMediaSrc("");
  };
  return (
    <ModalContext.Provider value={{ showModal, displayModal, closeModal, mediaSrc }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () =>{
  return React.useContext(ModalContext)
}

export default ModalProvider;
