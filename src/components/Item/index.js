import React from "react";
import {Link } from "react-router-dom";
import "./index.css";


export const Item = ({item}) => {
    return (
    
        <div className="col-lg-3 col-md-6 col-xs-12">
            <div className="card">    
                <Link to={`/detalle/${item.id}`}><img src={item.pictureUrl} alt="" className="card-img-top"/></Link>
                <div className="card-body">
                    <Link to={`/detalle/${item.id}`} id="estilo__link"><h5 className="card-title">{item.nombre}</h5></Link>
                    <div className="card-text"><p>${item.price}</p>
                    <Link to={`/detalle/${item.id}`} id="estilo__link"><i class="fas fa-search-plus"></i></Link>
                    </div>
                </div>
            </div>
        </div>
        
    )
};