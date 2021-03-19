import React, { useEffect, useState } from "react";
import { ItemCount } from "../ItemCount/itemCount.js";
import { ItemList} from "../ItemList";

export default function ItemListContainer() {
    
    const [items, setItems] = useState ([]);

    useEffect ( () =>{

        const promesa = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve([
                    {id:1, title:"Bolso holográfico", price:"4000", pictureUrl:"https://abrilct.github.io/efecto-tequila-tienda/images/bolso-holografico-animal-print.jpg" },
                    {id:2, title:"Billetera holográfica", price:"500", pictureUrl:"https://abrilct.github.io/efecto-tequila-tienda/images/billetera-holografica-mandalas2.jpg" },
                    {id:3, title:"Identificador", price:"500", pictureUrl:"https://abrilct.github.io/efecto-tequila-tienda/images/identificador1.jpg" },
                    {id:4, title:"Diseño", price:"1000", pictureUrl:"https://abrilct.github.io/efecto-tequila-tienda/images/disenio-anvorguesa.jpg" }
                ])
            },2000)
            })
        
            promesa.then((resultado)=>{
                setItems(resultado)
                })
        
            })
        
            return (
                <div className="container-fluid">
                    <h3>Productos</h3> 
                    <ItemList items={items}/>   
                    <ItemCount stock="10" initial="0"/>              
                </div>
            );

};
        