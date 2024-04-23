import PropTypes from "prop-types";
import "../styles/modal.scss";
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

const ModalLogin = ({ children }) => {
  ModalLogin.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const context = useContext(ShoppingCartContext);
  return (
    <>
      <section className="modal">
        <div className="container-modal">
          <button
            onClick={() => context.openModalLogin()}
            className="icon-close"
          >
            X
          </button>
          <h1>Ingreso Exitoso</h1>
          {children}
        </div>
      </section>
    </>
  );
};

export default ModalLogin;
