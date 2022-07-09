import { productsData } from "../data/productsData";
import { useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () =>{
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
            resolve(productsData[1])
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
            <ItemDetail data = {products}/ >
            }
        </div> 
    )
}
export default ItemDetailContainer;