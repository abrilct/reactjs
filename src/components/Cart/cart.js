import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from '../../firebase';
import "./index.css";
import { Form } from '../Form';

export const Cart = () => {

    const {cart,removeItem,totalItems,totalPrecio,clear} = useContext(CartContext)

    const generarOrden = () => {

        
        const db = getFirestore();
        
        const ordersCol = db.collection("orders")
                
        let orden = {}

        const NewDate = firebase.firestore.Timestamp.fromDate(new Date())
        
        orden.buyer = {name:"Juan", phone:"12345678", email:"juan@juan.com"};
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
    }


    return (
        <div className="cart__detalles">
            {!cart.length ?   
                <>
                    <p>Todavía no agregaste productos a tu carrito.</p>
                    <p>Seguí explorando nuestros productos en <Link to='/' id="estilodellink">HOME</Link></p> 
                </>
                : (<> 
                    <div className="container">
                        <div>
                            <div className="carrito__detalles1">
                                <h6 id="nombreDelProducto"></h6>
                                <h6>Cantidad</h6>
                                <h6>Precio por unidad</h6>
                            </div> 
                            {cart.map(cartItem => (                        
                                <div key={cartItem.item.id} className="carrito__foto_y_descripcion">
                                    <img src={cartItem.item.pictureUrl}/> 
                                    <div className="carrito__foto_y_descripcion2">         
                                        <p>{cartItem.item.nombre}</p> 
                                        <p>{cartItem.quantity} u.</p>
                                        <p>${cartItem.item.price}</p>
                                        <button onClick={()=> removeItem(cartItem.item.id)} className="estilo__boton"><i class="far fa-times-circle"></i></button>       
                                    </div>                                                                 
                                </div>)
                            )}
                            <div className="carrito__detalles4">
                                <h6 id="total">Total:</h6>
                                <p>{totalItems} u. por ${totalPrecio}</p>
                            </div>     
                            <button onClick={clear}>Limpiar carrito</button>
                        </div>
                        <div className="carrito__final">
                            <Form />
                            
                        </div>                         
                    </div>        
                </>)
            }
        </div>
    )
}