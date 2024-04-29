import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import './header.css'
import CartBtn from '../CartBtn/CartBtn'


export default function Header(){
    return(
        <header className="header">
            <div className="container">
                <SearchBar/>
                <CartBtn/>
            </div>
        </header>
    )
}