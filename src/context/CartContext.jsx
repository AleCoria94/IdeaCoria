import React , {createContext,useContext, useState} from 'react';


const CartContext = createContext();
const useCartContext = function (){
    return useContext(CartContext);
}

export function CartContextProvider({children}){
        const[itemsInCart,setItemsInCart] = useState ([]);

        function addItem(data,qty){
            setItemsInCart([...itemsInCart, data])
        }

        function isInCart(id){
            let visto = itemsInCart.some((data)=>{
                return data.id ===id;
            })
            return visto;
        }
        function removeItem(id){
            if (isInCart(id)){
            let filtrado = itemsInCart.filter((data)=>{
                return data.id !==id;
            })
            setItemsInCart(filtrado)
        }}

        function clearCart(){
            setItemsInCart([]);
        }
        function countItemsInCart(){
                let total = 0;
                itemsInCart.forEach((data)=>{
                    total += data.qty;
                })
                return total;
            }

    return(
       <CartContext.Provider value={ { addItem,quantity: 5, itemsInCart, isInCart, removeItem, clearCart,countItemsInCart} }>
            {children}
       </CartContext.Provider>
    )
}

export default useCartContext;