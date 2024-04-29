
import React, { useContext } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import './ProductCard.css';
import ShopContext from '../../context/ShopContext';
import CurrencyFormat from '../utils/CurrencyFormat';

interface ProductData {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
}

interface ProductCardProps {
  data: ProductData;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const { title, thumbnail, price } = data;
  const {cartItems, setCartItems} = useContext(ShopContext)

  const handleAddToCart = () => {
    setCartItems(cartItems => [...cartItems, data]);
  }

  return (
    <section className="product-card">
      <img
        src={thumbnail.replace(/\w\.jpg/gi,'W.jpg')}
        alt="product"
        className="prct-img"
      />
      <div className="cardinfo">
        <h2 className="prct-price">{CurrencyFormat(price,'BRL')}</h2>
        <h2 className="prct-title">{title}</h2>
      </div>
      <button
        type="button"
        className="cardbtn"
        onClick={handleAddToCart}
      >
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}

export default ProductCard;
