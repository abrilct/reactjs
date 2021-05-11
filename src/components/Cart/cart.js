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

        // const [name, setName] = useState("");
        // const [email, setEmail] = useState("");
        // const [phone, setPhone] = useState("");


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
                    {/* Hacer una pequeña tabla para estos elementos */}
                    {cart.map(cartItem => (
                    <div key={cartItem.item.id} >
                        <div> Producto:  {cartItem.item.nombre} </div> <div> <img src={cartItem.item.pictureUrl} /></div>
                    
                        <div> Cantidad: {cartItem.quantity} </div>
                    
                        <button onClick={()=> removeItem(cartItem.item.id)}>Borrar este producto</button>
                    </div>)
                    )}
                    <div id="total">Total: {totalItems} productos por $ {totalPrecio}</div>
                    <button onClick={clear}>Borrar todo</button>
                
                       <Form />

                    <button onClick={generarOrden}>Finalizar compra</button>         
                </>)
            }
        </div>
    )
}

// const Checkout = () => {
// 	const [name, setName] = useState("");
// 	const [email, setEmail] = useState("");
// 	const [phone, setPhone] = useState("");

// const guardarOrden = (e) => {
// 	e.preventDefault();
// 	const comprador = { name, phone, email};

// };

// 	return (
// <>
// 					<form action="" onSubmit={guardarOrden}>
// 						<label className="" htmlFor="nombreApellido">
// 							Name and Surname
// 						</label>
// 						<input
// 							className="h-8 mb-2 rounded w-full"
// 							type="text"
// 							name="name"
// 							id="nombreApellido"
// 							onChange={(e) => {
// 								setName(e.target.value);
// 							}}
// 						/>
// 					</form>
// 					<form>
// 						<label className="" htmlFor="Email">
// 							Email
// 						</label>
// 						<input
// 							className="h-8 mb-2 rounded w-full"
// 							type="text"
// 							name="email"
// 							id="email"
// 							onChange={(e) => {
// 								setEmail(e.target.value);
// 							}}
// 						/>
// 					</form>
// 					<form>
// 						<label className="" htmlFor="phone">
// 							Telephone
// 						</label>
// 						<input
// 							className="h-8 mb-2 rounded w-full"
// 							type="text"
// 							name="phone"
// 							id="phone"
// 							onChange={(e) => {
// 								setPhone(e.target.value);
// 							}}
// 						/>
// 					</form>
// 					<button
// 						type="submit"
						
// 						onClick={guardarOrden}
// 					>
// 						Confirm purchase
// 					</button>
// 		</>
// 	);
// };

// export default Checkout;