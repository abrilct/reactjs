import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Item, item} from "../Item";
import {ItemCount} from "../ItemCount";
import "./index.css";

export default function ItemDetail({item}) {

    const [count, setCount] = useState(0)

    const addHandler = (contador)=>{
        alert ("se agregó un item", contador)
        setCount(contador)
    }

    return (
        <div id="producto__Detalle">
            {count}
            
                <div >
                    <img src={item.pictureUrl} className="img__detalle"/>                
                </div>
            <div>    
                <div  id="producto__Descripcion">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <p>{item.price}</p>                
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