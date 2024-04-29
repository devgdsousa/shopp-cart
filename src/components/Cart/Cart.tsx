import React, { useContext } from "react";
import './Cart.css'
import CartItem from "./CartItem/CartItem";
import CartResume from "./CartResume/CartResume";
import ShopContext from "../../context/ShopContext";


function Cart() {
  const {cartItems, cartVisible} = useContext(ShopContext)
  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  return (
     <section className={`cart ${cartVisible ? 'cart-active':''}`}>
      <div className="cartItems">
        {cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />)}
      </div>
      <div className="cartResume"><CartResume totalPrice={totalPrice} /></div>
     </section>
   );
}

export default Cart;
