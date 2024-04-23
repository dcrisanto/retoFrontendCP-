import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import MyOrder from "../containers/MyOrder";

const Menu = () => {
  const activeStyle = "underline underline-offset-8 font-bold";
  const context = useContext(ShoppingCartContext);

  return (
    <>
      <section className="menu-section flex">
        <nav className="container-menu top-0 flex w-full">
          <ul className="menu-right flex gap-4">
            <li className="item-menu text-lg">
              <NavLink
                onClick={() => context.setCheckoutShoppingCartOpen(false)}
                to="/"
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                HOME
              </NavLink>
            </li>
            <li className="item-menu text-lg">
              <NavLink
                onClick={() => context.setCheckoutShoppingCartOpen(false)}
                to="/dulceria"
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                DULCERÍA
              </NavLink>
            </li>
            <li className="item-menu text-lg">
              <NavLink
                onClick={() => context.setCheckoutShoppingCartOpen(false)}
                to="/login"
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                LOGIN
              </NavLink>
            </li>
            <li
              className="cursor-pointer text-lg pl-10"
              onClick={() => context.openCheckoutShoppingCart()}
            >
              🛒 {context.count}
            </li>
          </ul>
        </nav>
      </section>
      {context.isCheckoutShoppingCartOpen && <MyOrder />}
    </>
  );
};

export default Menu;
