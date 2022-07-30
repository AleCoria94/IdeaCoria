import React from 'react'
import Item from './Item'

export default function ItemList({products}){
    return (
        <div className="row row-cols-xs-6 row-cols-md-3 row-cols-sm-4 row-cols-lg-4 mx-2">
            {products ? products.map((items) => (<Item key = {items.id} data = {items}/>
            )) : <div className= "col"><h1>Cargando...</h1></div>
            }
        </div>
    )
}