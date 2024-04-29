import React, { useContext } from "react";
import './CartItem.css'
import { MdRemoveShoppingCart } from "react-icons/md";
import ShopContext from "../../../context/ShopContext";
import CurrencyFormat from "../../utils/CurrencyFormat";

interface IProduct {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
}

interface CartItemProps {
  data: IProduct;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const { thumbnail, title, price } = data;
  const {cartItems, setCartItems} = useContext(ShopContext)

  const handleRemoveFromCart = () => {
    setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== data.id));
  }

  return (
    <section className="cartItem">
      <img className="cartItem-img"
      src={thumbnail}
      alt="imagem do produto"/>
      <div className="cartItem-content">
        <h3 className="item-title">{title}</h3>
        <h3 className="item-price">{CurrencyFormat(price,'BRL')}</h3>
        <button className="btn-remove-item" onClick={handleRemoveFromCart}><MdRemoveShoppingCart /></button>
      </div>
    </section>
   );
}

export default CartItem;
