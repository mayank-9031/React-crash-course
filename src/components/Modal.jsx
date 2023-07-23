import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";

const Modal = ({ children }) => {
  const naviagate = useNavigate();

  function closeHandler() {
    naviagate("..");
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
