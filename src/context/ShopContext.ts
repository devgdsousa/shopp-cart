import { createContext } from "react";

interface IProduct {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
}

interface IShopContext {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  cartItems: IProduct[];
  setCartItems: React.Dispatch<React.SetStateAction<IProduct[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  cartVisible: boolean;
  setcartVisible:React.Dispatch<React.SetStateAction<boolean>>;
}

const ShopContext = createContext<IShopContext | undefined>(undefined);

export default ShopContext;
