import { useState } from "react";
import React  from "react";


export const Form = () => {
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
                <input id="first_name2" type="text" class="validate" value={name}  required onChange={(e)=> setName(e.target.value)}/>
                <label class="active" for="first_name2">Nombre y Apellido</label>
                <input id="first_name2" type="text" class="validate" value= {phone} required onChange={(e)=> setPhone(e.target.value)}/>
                <label class="active" for="first_name2">Telefono</label>
                <input type= "text" value= {email} required onChange={(e)=> setEmail(e.target.value)}/>
                <label class="active" for="first_name2">E-mail</label>

                <label for="name">
                    Nombre completo
                </label>
                <input type="text" name="" id="" onChange={(e) => {setName(e.target.value);}}/>
                <label for="email">
                    Email
                </label>
                <input type="email" name="" id="" onChange={(e) => {setEmail(e.target.value);}}/>
                <label for="number">
                Número de celular o teléfono
                </label>
                <input type="number" name="" id="" onChange={(e) => {setPhone(e.target.value);}}/>
            </fieldset>
        </form>
    </> 
}


// 					<button
// 						type="submit"
						
// 						onClick={guardarOrden}
// 					>
// 						Confirm purchase
// 					</button>
// 		</>

