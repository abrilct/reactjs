import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from '../../firebase';
import "./index.css";

export const Cart = () => {

    const {cart,removeItem,totalItems,totalPrecio,clear} = useContext(CartContext)

    const generarOrden = () => {
        const db = getFirestore();
        
        const ordersCol = db.collection("orders")
        
        
        let orden = {}

        const NewDate = firebase.firestore.Timestamp.fromDate(new Date())
        
        orden.buyer = {name: "Juan", phone: "1234567", email:"djfjsdfk@fjdfj.com"};
        orden.total = totalPrecio;
        orden.items = cart.map(cartItem => {
            const id = cartItem.item.id;
            const nombre = cartItem.item.nombre;
            const price = cartItem.item.price * cartItem.count;

            return {id, nombre, price}
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
        <div className="cart__detalles">
            {!cart.length ?   
                <>
                <p>Todavía no agregaste productos a tu carrito.</p>
                <p>Volver a <Link to='/'>HOME</Link></p> 
                </>
            : (<>
                {cart.map(cartItem => (
                <div key={cartItem.item.id} >
                    <div> Producto:  {cartItem.item.nombre}  </div>
                    <div> Cantidad: {cartItem.quantity} </div>
                    <button onClick={()=> removeItem(cartItem.item.id)}>Borrar este producto</button>
                </div>)
                )}
                <div id="total">Total: {totalItems} productos por $ {totalPrecio}</div> 
                <button onClick={clear}>Borrar todo</button>
                <button onClick={generarOrden}>Finalizar compra</button>         
                </>
            )
            }

        </div>
    )
}