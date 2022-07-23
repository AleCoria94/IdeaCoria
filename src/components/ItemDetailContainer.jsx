import { useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {getFirestore, getDocs, collection,doc,getDoc} from "firebase/firestore"

const ItemDetailContainer = () =>{
    const  {id}=useParams();
    const[loading, setLoading] = useState(true)
    const[products, setProducts]= useState({})

useEffect (() => {
    if( id){
       const db = getFirestore();
      const queryProduct = doc(db,'items',id)
      getDoc(queryProduct)
       .then(resp =>setProducts( {id :resp.id, ...resp.data() } ))
       .catch(err => console.log(err))
       .finally(()=>setLoading(false))
  
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
            <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
            </div>
            :
            <ItemDetail data={products}/ >
            }
        </div> 
    )
}
export default ItemDetailContainer;