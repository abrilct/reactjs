import React from "react";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./index.css";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" id="nav_color">
			<Link to="/" className="nav-link" id="estilo__indicador__Escritorio">HOME</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		  		<span className="navbar-toggler-icon"></span>
	    	</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
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
			</button>*/
			
    );
};