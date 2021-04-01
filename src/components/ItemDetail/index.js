import React from "react";
import {Item, item} from "../Item";

export default function ItemDetail({item}) {

    return (
        <div className="row">
            <div className="col-lg-6 col-xs-12">
                <img src="" alt="" class="producto__Imagen"></img>
            </div>
            <div className="col-lg-6 col-xs-12" id="producto__Descripcion">
                <h4>nombre</h4>
                <p>descripcio</p>
                <p>precio</p>
                {/* item + . + elemento */}
            </div>
        </div>
    );
};

export {ItemDetail} 