import { useState } from "react";

export const useModal = () => {
  const [modal, setMoal] = useState(false);
  const [modalContent, setModalContent] = useState('i am modal');

  const handleModal = (content = false) => {
    setMoal(!modal);
    if (content) {
      setModalContent(content);
    }
  };
  return { modal, handleModal, modalContent };
}