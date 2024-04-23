import { useContext } from "react";
import OrderItem from "../components/OrderItem";
import flecha from "../assets/icons/flecha.svg";
import shopping from "../assets/icons/icon_shopping_cart.svg";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import "../styles/myorder.scss";
import { useNavigate } from "react-router-dom";

const MyOrder = () => {
  const context = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + parseInt(currentValue.price);
    const sum = context.cartProducts.cart.reduce(reducer, 0);
    return sum;
  };

  const handleClick = () => {
    navigate("/pago");
    context.openCheckoutShoppingCart();
  };

  return (
    <aside className="my-order-aside">
      {context.cartProducts.cart.length > 0 ? (
        <section className="my-order-section">
          <div className="title">
            <img
              className="cursor-pointer"
              onClick={() => context.openCheckoutShoppingCart()}
              src={flecha}
              alt="flecha"
            />
            <h1>Shopping cart</h1>
          </div>
          {context.cartProducts.cart.map((item) => {
            return <OrderItem product={item} key={`orderItem-${item.id}`} />;
          })}
          <div className="total">
            <p>Total</p>
            <p>${sumTotal()}</p>
          </div>
          <div className="container-btn">
            <button onClick={() => handleClick()}>Continuar</button>
          </div>
        </section>
      ) : (
        <section className="no-order-section">
          <img src={shopping} />
          <h2>Tu Carro está vacío</h2>
        </section>
      )}
    </aside>
  );
};

export default MyOrder;
