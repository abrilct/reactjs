import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {Item, item} from "../Item";
import {ItemCount} from "../ItemCount";
import {CartContext} from "../../context/cartContext"
import "./index.css";

export default function ItemDetail({item}) {

    const [qty, setQty] = useState(0)
    
    const {addItem, cart} = useContext (CartContext);

    const addHandler = (quantityToAdd)=>{
        const qty = parseInt(quantityToAdd)
        alert ("se agregó un item", qty)
        addItem (item, qty)
        setQty(qty)
    }
    
  //  if (!item) return null;

    return (
        <div id="producto__Detalle">
            {qty}            
            <div >
                <img src={item?.pictureUrl} className="img__detalle"/>                
            </div>
            <div>    
                <div  id="producto__Descripcion">
                    <h4>{item?.nombre}</h4>
                    <p>{item?.descripcion}</p>
                    <p>{item?.price}</p>                
                </div>           
                <div className="producto__counter">
                    {qty === 0 ?
                        (item?.title && <ItemCount stock="10" initial="0" onAdd={addHandler}/>)
                            :
                        <Link to="/cart">
                            <button className="button__terminar" >Terminar mi compra</button>
                        </Link> 
                    } 
                </div>
            </div>            
        </div>
    );                       

};

export {ItemDetail} 