import React from "react";
import {Link } from "react-router-dom";
import "./index.css";


export const Item = ({item}) => {
    return (
            

        <div className="col-lg-3 col-md-6 col-xs-12">
            <div className="card">
                <img src={item.pictureUrl} alt="" className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <div><p className="card-text">${item.price}</p></div>
                    <Link to={`/detalle/${item.id}`}>Ver</Link>
                    
                </div>
            </div>

        </div>
    )
};