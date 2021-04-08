import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Item, item} from "../Item";
import {ItemCount} from "../ItemCount"

export default function ItemDetail({item}) {

    const [count, setCount] = useState(0)

    const addHandler = (contador)=>{
        console.log ("se agregó un item", contador)
        setCount(contador)
    }

    return (
        <div className="row">
            {count}
            <div className="col-lg-6 col-xs-12">
                <img src={item.pictureUrl}/>
                
            </div>
            <div className="col-lg-6 col-xs-12" id="producto__Descripcion">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <p>{item.price}</p>
                
            </div>

            {count == 0 ?
                <ItemCount stock="10" initial="0" onAdd={addHandler}/>
                    :
                <Link to="/cart">
                    <button >Terminar mi compra</button>
                </Link> 
            }
            
        </div>
    );                       

};

export {ItemDetail} 