import React from "react";
import "./index.css";

const Footer = () => {

    return <>
        <footer>
            <div>
                <p>Efecto Tequila Tienda</p>
                <p>Ropa, accesorios y objetos personalizados</p>
            </div>
            <div id="footer__redes">
                <p><a href="https://www.fb.com/EfectoTequilaTienda" id="estilo__link"><i class="fab fa-facebook" aria-hidden="true"></i> Efecto Tequila Tienda</a></p>
                <p><a href="https://www.instagram.com/efectotequilatienda" id="estilo__link" ><i class="fab fa-instagram" aria-hidden="true"></i> efectotequilatienda</a></p>
                <p><i class="fas fa-envelope" aria-hidden="true"></i> efectotequilatienda@gmail.com</p>
            </div>

        </footer>
        </>
    };

export default Footer