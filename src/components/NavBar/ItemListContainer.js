import React from "react";
import { ItemCount } from "../ItemCount/itemCount";

export default function ItemListContainer(props) {
    return <div className="container">
        Lista de Items
    <ItemCount stock="10" initial="1"/>
    </div>;
};