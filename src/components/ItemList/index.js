import React from "react";
import { Item } from "../Item";
import "./index.css";

export const ItemList = ({items}) => {
    return (
        <div className="row" id="items">
            {items.map (elemento => <Item item={elemento}/>)}
        </div>
    );
}