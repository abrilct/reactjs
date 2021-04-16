import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export default function CartWidget() {
    
    const {totalItems} = useContext(CartContext)
    
    return <>
            {totalItems? <i class="fas fa-shopping-cart">Carrito {totalItems}</i>: null } 
    </>
}

