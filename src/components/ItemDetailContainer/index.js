import React, { useEffect, useState } from "react";

import {ItemDetail} from "../ItemDetail";

const datos =
    {id:1, title:"Bolso holográfico", price:"4000", pictureUrl:"https://abrilct.github.io/efecto-tequila-tienda/images/bolso-holografico-animal-print.jpg", description:"Bolso holográfico con bolsillo personanizable"}


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
            <div>
                <h6>Datos del item</h6>
                <ItemDetail item={datosDelItem}/>
            </div>
        )
            
    
}
