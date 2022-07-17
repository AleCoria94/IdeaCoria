import React from 'react'
import {Link} from 'react-router-dom'
import useCartContext from '../context/CartContext'

function CartView() {

    const{ itemsInCart, removeItem,clearCart} = useCartContext();

    if ( itemsInCart.length === 0 ){
        return(
            <div className="container">
                <Link to="/">Volver al catálogo</Link>
            </div>
        )
    }
    else
        {
            return(
                <div className="container">
                    <h3>Estás en el carrito de compras</h3>
                    <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Articulo</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    itemsInCart.map( data =>(
                                        <tr keys={data.id}>
                                            <td>{data.name}</td>
                                            <td>$ {data.price}</td>
                                            <td>{data.qty}</td>
                                            <td>$ {data.qty*data.price.toFixed(2)}</td>
                                            <td><button onClick= {()=>removeItem(data.id)} className="btn btn-primary" type="button">Eliminar del carrito</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                            </table>
                            <button onClick= {()=>alert('Compra realizadas')} className="btn btn-success" type="button">Finalizar la compra</button>
                            <button onClick= {clearCart} className="btn btn-danger" type="button">Vaciar el carrito</button>
                </div>
            )
        }


}

export default CartView;