import React from 'react'
import './ItemDetail.css'
import ItemCount from './ItemCount'
import useCartContext from "../context/CartContext"

export default function ItemDetail({data}){
    
    const{ addItem,  removeItem} = useCartContext();

    return <div className="card d-flex justify-content-around">
        <div className="card-body-sm-3">
            <div className="row">
                <div className="col-sm">
                    <img src={data.img} className="card-img-top img-fluid" alt="..."/>
                </div>
                <div className="col">
                    <h1 className="list-group-item">{data.name}</h1>
                    <li className="list-group-item">¡Quedan {data.stock} unidad/es disponible/s!</li>
                    <h3><strike> ${data.price*1.25}</strike></h3>
                    <h1 className="list-group-item"> $ {data.price} </h1>
                    <li className="list-group-item">Retiro gratis en sucursal</li>
                    <li className="list-group-item">Envío a Caba</li>
                    <ItemCount stock={data.stock} initial={1} onAdd={addItem} />
                    <button onClick= {()=>removeItem(data.id)} className="btn btn-primary" type="button">Eliminar del carrito</button>
                </div>
            </div>
        </div>
                <div className="row">
                    <h2>Descripción del producto</h2>
                    <ul>
                        <li className="list-group-item-sm">{data.description} </li>
                    </ul>
                    
                </div>
    
</div>
}