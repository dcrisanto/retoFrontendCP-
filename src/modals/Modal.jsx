import PropTypes from "prop-types";
import "../styles/modal.scss";
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

const Modal = ({ children }) => {
  Modal.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const context = useContext(ShoppingCartContext);
  return (
    <>
      <section className="modal">
        <div className="container-modal">
          <button onClick={() => context.openModal()} className="icon-close">
            X
          </button>
          <h1>Pago exitoso</h1>
          {children}
        </div>
      </section>
    </>
  );
};

export default Modal;
