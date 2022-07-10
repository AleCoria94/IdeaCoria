import React from "react";
import { Link } from "react-router-dom";
import './Item.css'

function Item ({data}){
        return <>

        <div className="card d-flex justify-content-around">
        <div className="card-body">

            <ul className="list-group list-group-flush">
                <img src={data.img} className="card-img-top" widht="100" height="100" alt="..."/>
                <h1 className="list-group-item">{data.name}</h1>
                <h1 className="list-group-item"> $ {data.price} </h1>
                
                <Link to = {`/item/${data.id}`}>
                    <button type="button" className="btn btn-primary">Ver producto</button>
                </Link>
          </ul>
             
    </div>
        </div>
        </>
         }
export default Item;