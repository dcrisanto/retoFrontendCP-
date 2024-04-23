import PropTypes from "prop-types";
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { PlusIcon } from "@heroicons/react/24/solid";

const CardCandyStore = ({ product }) => {
  CardCandyStore.propTypes = {
    product: PropTypes.object,
  };
  const context = useContext(ShoppingCartContext);
  const addProductsToCart = (productData) => {
    context.addProductsToCart(productData);
  };
  return (
    <div className="relative flex flex-col gap-4 justify-center bg-yellow-500 w-48 rounded-lg">
      <div
        className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
        onClick={() => addProductsToCart(product)}
      >
        <PlusIcon className="h-6 w-6 text-black cursor-pointer"></PlusIcon>
      </div>
      <p className="text-name text-lg font-bold pt-8">{product.name}</p>
      <p className="text-description text-lg font-light">
        {product.description}
      </p>
      <p className="text-title text-lg font-light">{product.price}</p>
    </div>
  );
};

export default CardCandyStore;
