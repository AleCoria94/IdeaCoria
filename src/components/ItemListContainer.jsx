import React from 'react';

import { useEffect, useState} from "react";
import ItemList from "./ItemList";
import Carrousel from './Carrousel';
import { useParams } from 'react-router-dom';
import {getFirestore, getDocs, where, collection, query} from "firebase/firestore"


function ItemDetailContainer (){
    const[products, setProducts]= useState([])
    const[loading, setLoading] = useState(true)
    const {categoryid} = useParams();


   useEffect (() => {
  if( categoryid){
     const db = getFirestore();
    const queryCollection = collection(db,'items')
    const queryCollectionFilter = query(queryCollection, where('category','==',categoryid))
    getDocs(queryCollectionFilter)
     .then(resp =>setProducts(resp.docs.map( prod => ( {id :prod.id, ...prod.data() } ))))
     .catch(err => console.log(err))
     .finally(()=>setLoading(false))


  //      .then( data => setProducts(data.filter(prod => prod.category === categoryid))) 
}else{
    const db = getFirestore();
    const queryCollection = collection(db,'items')
       getDocs(queryCollection)
        .then(resp =>setProducts(resp.docs.map( prod => ( {id :prod.id, ...prod.data() } ))))
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))
}
   });


    return (
        <div>
            { loading ? 
            <div className ="spinner-border text-primary" role="status">
            <span className ="sr-only">Loading...</span>
            </div>
            :
            <>
            <Carrousel/>
            <ItemList products = {products}/ >
                
            </>
        
            }
        </div> 
    )
}
export default ItemDetailContainer;
