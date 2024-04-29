import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import './CartBtn.css';
import ShopContext from "../../context/ShopContext";

export default function Cart() {
  const { cartItems, setcartVisible, cartVisible } = useContext(ShopContext);
  
  return (
    <button type="button" 
      className="cartButton" 
      onClick={() => setcartVisible(!cartVisible)}>
      <FaShoppingCart />
      {cartItems.length > 0 && <span className="status">{cartItems.length}</span>}
    </button>
  );
}
