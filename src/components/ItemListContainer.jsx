import React from 'react';

import { productsData } from "../data/productsData";
import { useEffect, useState} from "react";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';

function ItemDetailContainer (){
    const[products, setProducts]= useState([])
    const[loading, setLoading] = useState(true)
    const {categoryid} = useParams();

useEffect (() => {
    if( categoryid){
        getProducts()
        .then( data => setProducts(data.filter(prod => prod.category === categoryid))) 
    }else{
      getProducts().then( data => {setProducts(data);})
}
},[categoryid])

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
            <div className ="spinner-border text-primary" role="status">
            <span className ="sr-only">Loading...</span>
            </div>
            :
            <ItemList products = {products}/ >
            }
        </div> 
    )
}
export default ItemDetailContainer;
