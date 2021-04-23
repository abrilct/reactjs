import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export default function CartWidget() {
    
    const {totalItems} = useContext(CartContext)
    
    return <>
        <i class="fas fa-shopping-cart">{totalItems}</i> 
    </>
}

