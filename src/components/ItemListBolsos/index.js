import React, { useEffect, useState, } from "react";
import { ItemList} from "../ItemList";
import {useParams} from "react-router-dom";
import {getFirestore} from "../../firebase";


export default function ItemListContainer() {
    
    const [resultadoDeItems, setResultadoDeItems] = useState ([]);

    const {categoryId} = useParams()

    useEffect ( () =>{

        const db = getFirestore();
        const itemCollection = db.collection(`items`)
        const filtrado = itemCollection
        .where("categoria", "==", "bolsos");
        const promesa = itemCollection.get();

            promesa.then((snapshot)=>{
                if (snapshot.size > 0){
                    console.log (snapshot.docs.map(doc => doc.data()));
                    console.log (snapshot.docs.map(doc => doc.id));

                    setResultadoDeItems(snapshot.docs.map(doc => {
                        return {id:doc.id, ...doc.data()}
                        }
                    ))
                }
            
            })
    }, [categoryId])
        
    return (
        <div className="container-fluid"> 
            <h4>Todos los productos</h4>
            <ItemList items={resultadoDeItems}/>   
        </div>        
    );
};
    