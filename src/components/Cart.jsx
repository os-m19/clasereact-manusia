import React, {useContext, useEffect, useState} from "react";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
    const [totalPrice, setTotalPrice] = useState(0)
    const {cartItems, setCartItems, removeFromCart, clearCart} = useContext(CartContext);
    useEffect(() => {
        let total = 0;
        cartItems.forEach((item) => {
          total += parseInt(item.price*item.amount);
        });
        setTotalPrice(total);

      }, [cartItems]);

    return ( 
        <>
        <ul>
          {cartItems.map((item) => (
            <>
              <li>{item.name}</li>
              <li>{item.price}</li>
              <li>Cantidad: {item.amount}</li>
              <button onClick={() => removeFromCart(item.id)}>Remove item</button>
            </>
          ))}
        </ul>
        <h1 className="bg-primary">{`Your total is: $${totalPrice}`}</h1>
        <button onClick={clearCart}>Clear cart</button>
      </>
     );
}
 
export default Cart;