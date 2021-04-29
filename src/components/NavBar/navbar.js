import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./index.css";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" id="nav_color">
			<a className="navbar-brand" href="#" id="estilo__indicador__Escritorio">HOME</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		  		<span className="navbar-toggler-icon"></span>
	    	</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					{/* VERIFICAR LA ESTÉTICA*/}
					<li className="nav-item active">
						<NavLink to="/" className="nav-link">HOME</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to={'/category/accesorios'} className="nav-link">ACCESORIOS</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to={'/category/bolsos'} className="nav-link">BOLSOS</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to={'/category/indumentaria'} className="nav-link">INDUMENTARIA</NavLink>
					</li>
					<li>
						<NavLink to="/cart"><CartWidget/></NavLink>
					</li>
				</ul>
			</div>
		</nav>

		/* </nav>
			<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
			<a class="navbar-brand" href="#" id="estilo__indicador__Escritorio">HOME</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			  <span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						<a class="nav-link" href="#">HOME <span class="sr-only">(current)</span></a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="bolsos.html">BOLSOS</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="indumentaria/indumentaria.html">INDUMENTARIA</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="accesorios/accesorios.html">ACCESORIOS</a>
					</li>
					<li class="carritoCompras">
						<a href="carrito.html"><i class="fas fa-shopping-cart"></i>Carrito:<span>0</span></a>
					</li>
				</ul>
			</div>
		</nav> */


    );
};