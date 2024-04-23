import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import PropTypes from "prop-types";
import "../styles/orderItem.scss";

const OrderItem = ({ product }) => {
  OrderItem.propTypes = {
    product: PropTypes.object,
  };
  const context = useContext(ShoppingCartContext);

  const handleRemove = (name) => {
    context.removeFromCart(name);
  };

  return (
    <div className="order-item">
      <div className="product-info">
        <p>{product.name}</p>
      </div>
      <div className="product-price">
        <p>$ {product.price}</p>
        <p onClick={() => handleRemove(product.name)}>X</p>
      </div>
    </div>
  );
};

export default OrderItem;
