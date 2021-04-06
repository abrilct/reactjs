import React, {useState } from "react";
import "./itemCount.css";

export function ItemCount({stock, initial, onAdd}){
    const [count, setCount] = useState (parseInt(initial));

    const addHandle = () => {
        setCount (count + 1);
    };

    const removeHandle = () => {
        setCount (count - 1);
    };

    return (
        <div className="container">
            <div className="row" >
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" id="item_contador">
                    <p>Bolso holográfico cristal</p>
                    <div id="botones_contador">
                        <button disabled={count <= 0} className="btn btn-outline-primary" type="button" onClick={removeHandle}>-</button>
                        <div>{count}</div>
                        <button disabled={count >= stock} className="btn btn-outline-primary" type="button" onClick={addHandle}> + </button>
                    </div>
                    <button disabled={count <= 1} className="btn btn-outline-success" type="button" onClick={ () => onAdd(count)}> Agregar al carrito </button>   
                </div>
            </div> 
        </div>           
    );
}
export default ItemCount;

