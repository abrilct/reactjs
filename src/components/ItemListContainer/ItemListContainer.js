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
        const filtrado = categoryId ? itemCollection.where("categoria", "==", categoryId ): itemCollection;
        const promesa = filtrado.get();
        // const promesa = itemCollection.get();

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
            <ItemList items={resultadoDeItems}/>   
        </div>        
    );
};
        

 