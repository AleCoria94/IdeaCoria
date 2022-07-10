import { productsData } from "../data/productsData";
import { useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{
    const { id }=useParams();
    const[products, setProducts]= useState([])
    const[loading, setLoading] = useState(true)

    useEffect (() => {
        if(id){
            getProducts()
            .then( data => setProducts(data.find(prod => prod.id === id)))
            .catch(err=> console.log(err)) 
        }else{
          getProducts().then( data => {setProducts(data)})
    }
    })
const getProducts = ()=>{
    return new Promise ((resolve, eject) =>{
        setTimeout (()=>{
            setLoading(false)
            resolve(productsData[id])
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