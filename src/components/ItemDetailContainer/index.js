import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {ItemDetail} from "../ItemDetail";
import {getFirestore} from "../../firebase";



const getItems = (id) => { 

    const db = getFirestore();
    const itemCollection = db.collection('items')

    const item = itemCollection.doc(id)
    return item.get();
    
}

export function ItemDetailContainer() {
    
    const [datosDelItem, setDatosDelItem] = useState(null);

    const {itemId} = useParams();

    useEffect(() => {
        getItems(itemId)
        .then((res) => {

            if (res.exists){
                setDatosDelItem( {id:res.id, ...res.data()})
            }
            
        })
        return;
    }, [itemId])

        return <>
                <ItemDetail item={datosDelItem}/>
        
        </>
            
    
}
