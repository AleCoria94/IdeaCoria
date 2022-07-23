import React from 'react'
import useCartContext from '../context/CartContext';

function Cardwidget (){
  const {countItemsInCart } = useCartContext();
    return <div className="dropdown">
    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>  { countItemsInCart() !==0 ? <div> { countItemsInCart()}</div>: <></>}
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <li><a className="dropdown-item" href="/Cart">Mi carrito</a></li>
      <li><a className="dropdown-item" href="/miscompras">Mis compras</a></li>
      <li><a className="dropdown-item" href="/logout">Salir</a></li>
    </ul>
  </div>
 
}

export default Cardwidget;