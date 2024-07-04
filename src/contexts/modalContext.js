import { createContext } from "react";
import { useModal } from "../hooks/useModal";
import ModalTemplate from "../components/Modal/ModalTemplate";

export const ModalContext = createContext({});

export const ModalContextProvider = ({ children }) => {
  
  const {modal, modalContent, handleModal} = useModal();

 
  return (
    <ModalContext.Provider value={{ modal, handleModal, modalContent }}>
      <ModalTemplate/>
      {children}
    </ModalContext.Provider>
  );
};