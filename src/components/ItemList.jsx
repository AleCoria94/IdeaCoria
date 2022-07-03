import React from 'react'
import Item from './Item'

export default function ItemList({products}){
    return (
        <div className="row">
            {products ? products.map((items) => (<Item key = {items.id} data = {items}/>
            )) : <div className= "container bg-light"><h1>Cargando...</h1></div>
            }
        </div>
    )
}