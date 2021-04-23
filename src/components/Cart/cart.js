import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from '../../firebase';

export const Cart = () => {

    const {cart,removeItem,totalItems,totalPrecio,clear} = useContext(CartContext)

    const generarOrden = () => {
        const db = getFirestore();
        
        const ordersCol = db.collection("orders")
        
        
        let orden = {}

        orden.date = firebase.firestore.Timestamp.fromDate(new Date());
        
        orden.buyer = {name: "Juan", phone: "1234567", email:"djfjsdfk@fjdfj.com"};
        orden.total = totalPrecio;
        orden.items = cart.map(cartItem => {
            const id = cartItem.item.id;
            const title = cartItem.item.title;
            const price = cartItem.item.price * cartItem.quantity;

            return {id, title, price}
        })

        ordersCol.add(orden)
        .then((IdDocumento) => {
            console.log(IdDocumento.id)

        })
        .catch( err => {
            console.log(err)
        } )
        .finally( () => {
            console.log("Term prom")
        })

        const batch = db.batch();

        for (const cartItem of cart) {
            const docRef = db.collection('items').doc(cartItem.item.id)

            batch.update(docRef, {
                stock: cartItem.item.stock - cartItem.quantity
            })
        }
        batch.commit().then(res => {
            console.log("resultado batch:", res)
        })

        console.log(orden)
    }


    return (
        <div>
            {!cart.length ?   
                <h2>No hay Items en el carrito <Link to='/'>Ir al home </Link> </h2>
            : (<>
                {cart.map(cartItem => (
                <div key={cartItem.item.id} >
                    <div> Titulo:  {cartItem.item.title}  </div>
                    <div> cantidad: {cartItem.quantity} </div>
                    <button onClick={()=> removeItem(cartItem.item.id)}>borrar</button>
                </div>)
                )}
                <div>Total:{totalItems} y {totalPrecio}</div> 
                <button onClick={clear}>Borrar todo</button>
                <button onClick={generarOrden}>Finalizar compra</button>         
                </>
            )
            }

        </div>
    )
}