import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {ItemDetail} from "../ItemDetail";
import {getFirestore} from "../../firebase";



const getItems = (id) => { 
    // return new Promise((traerDatos, error)=>{
    //     setTimeout(()=>{
    //         traerDatos(datos.find((e) => e.id === parseInt(id)))
    //     },3000)
    // })

    const db = getFirestore();
    const itemCollection = db.collection('items')

    const item = itemCollection.doc(id)
    return item.get();
    
}

export function ItemDetailContainer() {
    
    const [datosDelItem, setDatosDelItem] = useState(null);
    //el usestate era {}
    const {itemId, otroId} = useParams()

    useEffect(() => {
        getItems(itemId)
        .then((res) => {
            console.log( 'existe?', res.exists);

            if (res.exists){
                setDatosDelItem( {id:res.id, ...res.data()})
            }
            
        })
        return;
    }, [itemId])

        return <>
                {itemId} - {otroId}
                <ItemDetail item={datosDelItem}/>
        
        </>
            
    
}
