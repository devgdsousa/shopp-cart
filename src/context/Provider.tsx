import React, { useState, ReactNode } from "react";
import ShopContext from "./ShopContext";

interface ProviderProps {
  children: ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartVisible, setcartVisible] = useState(false);
  const value = {
    products,
    setProducts,
    cartItems,
    setCartItems,
    loading,
    setLoading,
    cartVisible, 
    setcartVisible
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};
export default Provider;
