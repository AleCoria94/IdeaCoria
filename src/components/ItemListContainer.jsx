import React from 'react';

import { productsData } from "../data/productsData";
import { useEffect, useState} from "react";
import ItemList from "./ItemList";

function ItemDetailContainer (){
    const[products, setProducts]= useState([])
    const[loading, setLoading] = useState(true)

useEffect (() => {
getProducts().then( data => {
    setProducts(data);
})
})

const getProducts = ()=>{
    return new Promise ((resolve, eject) =>{
        setTimeout (()=>{
            setLoading(false)
            resolve(productsData)
        },2000);
    })
}

    return (
        <div>
            { loading ? 
            <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
            </div>
            :
            <ItemList products = {products}/ >
            }
        </div> 
    )
}
export default ItemDetailContainer;
