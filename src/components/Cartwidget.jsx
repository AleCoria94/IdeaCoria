import React from 'react'
import useCartContext from '../context/CartContext';

function Cardwidget (){
  const {countItemsInCart } = useCartContext();
    return <>
    <div className="dropdown">
    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
  { countItemsInCart() !==0 ? <div> { countItemsInCart()}</div>: <></>}
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <li><a className="dropdown-item" href="/Cart">Mi carrito</a></li>
      <li><a className="dropdown-item" href="/miscompras">Mis compras</a></li>
      <li><a className="dropdown-item" href="/logout">Salir</a></li>
    </ul>
  </div>
  </> 
}

export default Cardwidget;