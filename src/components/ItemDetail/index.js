import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {Item, item} from "../Item";
import {ItemCount} from "../ItemCount";
import {CartContext} from "../../context/cartContext"
import "./index.css";

export default function ItemDetail({item}) {

    const [count, setCount] = useState(0)
    
    const {addItem} = useContext (CartContext);

    const addHandler = (countToAdd)=>{
        const count = parseInt(countToAdd)
        addItem (item, count)
        setCount(count)
    }
    
   if (!item) return null;

    return (
        <div id="producto__Detalle">         
            <div >
                <img src={item?.pictureUrl} className="img__detalle"/>                
            </div>
            <div>    
                <div id="producto__Descripcion">
                    <h4>{item?.nombre}</h4>
                    <p>{item?.descripcion}</p>
                    <p>Precio: $ {item?.price}</p>                
                </div>
                
                <div className="producto__counter">
                {count == 0 ?
                    <ItemCount stock="10" initial="0" onAdd={addHandler}/>
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