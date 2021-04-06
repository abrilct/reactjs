import React, { useEffect, useState } from "react";
import { ItemList} from "../ItemList";


const datos = [
    {id:1, title:"Bolso holográfico", price:"4000", pictureUrl:"https://abrilct.github.io/efecto-tequila-tienda/images/bolso-holografico-animal-print.jpg", description:"Bolso holográfico con bolsillo personanizable"},
    {id:2, title:"Billetera holográfica", price:"500", pictureUrl:"https://abrilct.github.io/efecto-tequila-tienda/images/billetera-holografica-mandalas2.jpg", description:"Billetera holográfica con diseño mandalas." },
    {id:3, title:"Identificador", price:"500", pictureUrl:"https://abrilct.github.io/efecto-tequila-tienda/images/identificador1.jpg" ,description:"Identificador para mascotas, personalizable de ambos lados, lavable."},
    {id:4, title:"Diseño", price:"1000", pictureUrl:"https://abrilct.github.io/efecto-tequila-tienda/images/disenio-anvorguesa.jpg", description:"Disponible en buzo o remera, en todos los talles."}
]

 export default function ItemListContainer() {
    
    const [resultadoDeItems, setResultadoDeItems] = useState ([]);

    useEffect ( () =>{

        const promesa = new Promise((traerDatos,error)=>{
            setTimeout(()=>{
                traerDatos(datos)
            },2000)
            })
        
            promesa.then((datos)=>{
                setResultadoDeItems(datos)
                })
    })
        
    return (
        <div className="container-fluid">
            <h3>Productos</h3> 
            <ItemList items={resultadoDeItems}/>   
        </div>        
    );
};
        

 