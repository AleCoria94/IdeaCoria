import React from 'react'
import { useState } from 'react';
import {Link} from "react-router-dom";

export default function ItemCount({stock, initial,onAdd}){
     const [contador,setContador] = useState(1)
     const increment = ()=>{
        contador < stock ? setContador(contador+1):setContador(contador)
    }
    const decrement =()=>{
        contador > 0 ? setContador(contador-1):setContador(contador)
    }

    return <>
        <button className="btn btn-primary" type="button" onClick={increment}>+</button>
            <span className="contador">{contador}</span>
        <button className="btn btn-primary" type="button" onClick={decrement}>-</button>

        <button onClick={()=>onAdd(contador)} className="btn btn-success" type="button">
            <Link to="/Cart">Terminar mi compra</Link></button>
    </>
}