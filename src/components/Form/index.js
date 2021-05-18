import { useState, useContext} from "react";
import React  from "react";
import "./index.css";
import { CartContext } from "../../context/cartContext";
import firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from '../../firebase';


export const Form = () => {
    const {cart,removeItem,totalItems,totalPrecio,clear} = useContext(CartContext)
    const generarOrden = () => {
    
    const db = getFirestore();
        
    const ordersCol = db.collection("orders")
                
    let orden = {}

    const NewDate = firebase.firestore.Timestamp.fromDate(new Date())
        
    // orden.buyer = {name:"Juan", phone:"12345678", email:"juan@juan.com"};
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

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
 	const [phone, setPhone] = useState("");

    const buyer = {name, email, phone};

    
    return <>
        <form>
            <fieldset>
                <legend>
                    Ingresa tus datos
                </legend>
                <label for="name">
                    Nombre completo
                </label>
                <input type="text" name="" id="" value={name} required onChange={(e) => {setName(e.target.value)}}/>
                <label for="email">
                    Email
                </label>
                <input type="email" name="" id="" value= {email} onChange={(e) => {setEmail(e.target.value)}}/>
                <label for="number">
                Número de celular o teléfono
                </label>
                <input type="number" name="" id="" value= {phone} required onChange={(e) => {setPhone(e.target.value)}}/>
            </fieldset>
            <button onClick={generarOrden}>Finalizar compra</button>
        </form>
    </> 
}
