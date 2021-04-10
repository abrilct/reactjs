import React, { useEffect, useState } from "react";

import {ItemDetail} from "../ItemDetail";

const datos =
    {id:1, title:"Bolso holográfico animal print", price:"4000", pictureUrl:"https://abrilct.github.io/efecto-tequila-tienda/images/bolso-holografico-animal-print.jpg", description:"Bolso holográfico con diseño animal print y bolsillo frontal personanizable."}


const getItems = () => { 
    return new Promise((traerDatos, error)=>{
        setTimeout(()=>{
            traerDatos(datos)
        })
    },3000)
    
}

export function ItemDetailContainer() {
    
    const [datosDelItem, setDatosDelItem] = useState({});

    useEffect(() => {
        getItems().then((datos)=> {
            setDatosDelItem(datos)
        }) 
    }, [])

        return (
            <div className="container">
                
                <ItemDetail item={datosDelItem}/>
            </div>
        )
            
    
}
