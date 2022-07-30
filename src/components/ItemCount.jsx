import React from 'react'
import { useState } from 'react';
import {Link} from "react-router-dom";

export default function ItemCount({stock,onAdd}){
     const [qty,setQty] = useState(1)
     const increment = ()=>{
        qty< stock ? setQty(qty+1):setQty(qty)
    }
    const decrement =()=>{
        qty > 0 ? setQty(qty-1):setQty(qty)
    }

    return <>
        <button className="btn btn-primary" type="button" onClick={increment}>+</button>
            <span className="contador">{qty}</span>
        <button className="btn btn-primary" type="button" onClick={decrement}>-</button>

        <button onClick={()=>onAdd(qty)} className="btn btn-success" type="button">
            <Link to="/Cart">Terminar mi compra</Link></button>
    </>
}