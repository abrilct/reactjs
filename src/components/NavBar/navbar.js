import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";

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
						<NavLink to='/listado' className="nav-link">LISTADO</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/detalle" className="nav-link">DETALLE</NavLink>
					</li>
					<li>
						<CartWidget/>
					</li>
				</ul>
			</div>

		</nav>
    );
};