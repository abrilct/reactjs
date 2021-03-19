import React from "react";
import { Item } from "../Item";
import "./index.css";

export const ItemList = ({items=[]}) => {
    return (
        <div className="row" id="items">
            {items.map (item => <Item item={item}/> 
            )}
        </div>
    );
}