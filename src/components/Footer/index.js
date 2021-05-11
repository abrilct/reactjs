import React from "react";
import "./index.css";

const Footer = () => {

    return <>
        <footer>
            <div>
               <p>Desarrollado por Candela Abril Turlione. 2021</p>
            </div>
            <div id="footer__redes">
                <a href="https://www.fb.com/EfectoTequilaTienda" target="_blank" id="estilo__link"><i class="fab fa-facebook" aria-hidden="true" ></i> </a>
                <a href="https://www.instagram.com/efectotequilatienda" id="estilo__link" target="_blank"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                <p><i class="fas fa-envelope" aria-hidden="true"></i> efectotequilatienda@gmail.com</p>
            </div>

        </footer>
        </>
    };

export default Footer