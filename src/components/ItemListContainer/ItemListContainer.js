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
        // const filtrado = itemCollection
        // .where("categoria", "==", categoryId);
        const promesa = itemCollection.get();



        // const promesa = new Promise((traerDatos,error)=>{
        //     setTimeout(()=>{
        //         traerDatos(datos)
        //     },2000)
        //     })
        
            promesa.then((snapshot)=>{
                if (snapshot.size > 0){
                    console.log (snapshot.docs.map(doc => doc.data()));
                    console.log (snapshot.docs.map(doc => doc.id));

                    setResultadoDeItems(snapshot.docs.map(doc => {
                        return {id:doc.id, ...doc.data()}
                        }
                    ))
                }
                // setResultadoDeItems(datos)
            })
    }, [categoryId])
        
    return (
        <div className="container-fluid">
            <h3>Productos de la categoria {categoryId}</h3> 
            <ItemList items={resultadoDeItems}/>   
        </div>        
    );
};
        

 