import { productsData } from "../data/productsData";
import { useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{
    const { id }=useParams();
    const[loading, setLoading] = useState(true)
    const[products, setProducts]= useState({})

    useEffect (() => {


 //   getProducts().then( data => {

 //    setProducts(data);})



        if(id){
          getProducts().then( data => {setProducts(data.find(prod => prod.id = id))})

    .catch(err=> console.log(err)) 
        }else{
         getProducts().then( data => {setProducts(data)})
    }
    });
const getProducts = ()=>{
    return new Promise ((resolve, reject) =>{
        setTimeout (()=>{
            setLoading(false)
            // ya se dejó en claro en la resolucion de la entrega anterior que no se tiene que haceer así
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
            <ItemDetail data={products}/ >
            }
        </div> 
    )
}
export default ItemDetailContainer;