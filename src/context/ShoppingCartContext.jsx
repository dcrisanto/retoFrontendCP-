import { createContext, useState } from "react";
import PropTypes from "prop-types";

//Context nos permite conectar toda nuestra aplicación por medio de este contexto y no importa en el nivel que se encuentre el componente vamos a poder acceder a una parte de lo que viene siendo un estado
export const ShoppingCartContext = createContext({});

export const ShoppingCartContextProvider = ({ children }) => {
  ShoppingCartContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const [count, setCount] = useState(0);
  console.log("count", count);

  //Checkout shoppingCart
  const [isCheckoutShoppingCartOpen, setCheckoutShoppingCartOpen] =
    useState(false);
  const openCheckoutShoppingCart = () => {
    setCheckoutShoppingCartOpen(!isCheckoutShoppingCartOpen);
  };

  const initialCartShopping = {
    cart: [],
  };
  //ShoppingCart
  const [cartProducts, setCartProducts] = useState(initialCartShopping);

  //ShoppingCart: Add products to cart
  const addProductsToCart = (payload) => {
    setCount(count + 1);
    setCartProducts({
      ...cartProducts,
      cart: [...cartProducts.cart, payload],
    });
    console.log("Cart", cartProducts.cart);
  };

  //ShoppingCart: Remove products to cart
  const removeFromCart = (name) => {
    setCount(count - 1);
    setCartProducts({
      ...cartProducts,
      cart: cartProducts.cart.filter((item) => item.name !== name),
    });
  };

  //modal pay
  const [isOpenModal, setOpenModal] = useState(false);
  const openModal = () => {
    setOpenModal(!isOpenModal);
  };

  //modal login
  const [isOpenModalLogin, setOpenModalLogin] = useState(false);
  const openModalLogin = () => {
    setOpenModalLogin(!isOpenModalLogin);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        cartProducts,
        setCartProducts,
        isCheckoutShoppingCartOpen,
        openCheckoutShoppingCart,
        addProductsToCart,
        removeFromCart,
        isOpenModal,
        setOpenModal,
        openModal,
        isOpenModalLogin,
        setOpenModalLogin,
        openModalLogin,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
