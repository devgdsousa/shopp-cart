import React,{useState, useContext} from "react";
import { BsSearch } from "react-icons/bs";
import './SearchBar.css'
import SearchProducts from "../../apiSearch/SearchProducts";
import ShopContext from "../../context/ShopContext";

const SearchBar: React.FC = () => {
    const[search, setSearch] = useState('')
    const shopContext = useContext(ShopContext);
    if (!shopContext) {
      throw new Error("SearchBar must be used within a ShopProvider");
    }
    const {setProducts, setLoading} = shopContext;

    const handleSearch = async (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        setLoading(true);
        const products = await SearchProducts(search);
        console.log(products)
        setProducts(products);
        setSearch('')
        setLoading(false);
    }
    return(
        <form className="search-bar" onSubmit={handleSearch}>
    
            <input 
             className="input-search"
             type="search" 
             placeholder="Buscar Produtos" 
             value={search}
             onChange={({target})=> setSearch(target.value)}
             required/>
    
            <button type="submit" className="button-search">
                   <BsSearch/>
            </button>
        </form>
    )
}

export default SearchBar;
