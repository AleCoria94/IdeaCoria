import React from 'react'
import {Link} from 'react-router-dom'
import useCartContext from '../context/CartContext'

function CartView() {

    const{ itemsInCart, removeItem,clearCart} = useCartContext();

    if ( itemsInCart.length === 0 ){
        return(
            <div className="container">
                <h3>El carrito esta vacío</h3>
                <Link to="/"><h3>Volver al catálogo</h3></Link>
                <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">Articulo</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Total</th>
                                </tr>
                            </thead>
                            </table>
            </div>
        )
    }
    else
        {
            return(
                <div className="container">
                    
                    <table className="table">
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
                                        <tr key={0}> 
                                            <td>{data.name}</td>
                                            <td>$ {data.price}</td>
                                            <td>{data.qty}</td>
                                            <td>$ {data.qty*data.price}</td>
                                            <td><button onClick= {()=>removeItem(data.id)} className="btn btn-primary" type="button">Eliminar del carrito</button></td>
                                      </tr>))
                                    
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