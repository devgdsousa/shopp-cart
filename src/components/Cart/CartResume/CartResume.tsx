import React from "react";
import CurrencyFormat from "../../utils/CurrencyFormat";
import './CartReume.css'

interface CartResumeProps {
  totalPrice: number;
}

const CartResume: React.FC<CartResumeProps> = ({ totalPrice }) => {
  return (
    <section className="cartResume">
      <h2>Total: {CurrencyFormat(totalPrice, 'BRL')}</h2>
    </section>
  );
}

export default CartResume;
