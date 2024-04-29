import React, { useContext, useEffect } from "react";
import './Products.css'
import SearchProducts from "../../apiSearch/SearchProducts";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../Loading/Loading";
import ShopContext from "../../context/ShopContext";

const Products: React.FC = () => {
  const shopContext = useContext(ShopContext);
  if (!shopContext) {
    throw new Error("SearchBar deve ser usado dentro de um ShopProvider");
  }
  const {products, setProducts, loading, setLoading} = shopContext;
 
  useEffect(() => {
    SearchProducts('xiaomi').then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  return (
    (loading && <Loading/>) || (
       <section className="products container">
         {products.map((product) => (
          <ProductCard key={product.id} data={product} />))}
       </section>
    )
    
  );
};

export default Products;
