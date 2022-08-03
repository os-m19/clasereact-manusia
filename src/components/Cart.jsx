import React, {useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
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

      
    if (cartItems.length === 0) {
      return (
        <>
          <div className="col-lg-10 col-12 pt-3">
            <div className="d-flex flex-column pt-4 mb-3">
              <div><h5 className="text-uppercase font-weight-normal ms-5">El carrito está vacío</h5></div>
            </div>
            <Link to={"../"}>
              <button className="btn btn-sm bg-dark text-white px-lg-5 px-3 ms-5">Volver a la tienda</button>
            </Link>
          </div>
        </>
      )
    }

    return ( 
        <>
          <div className="container bg-white rounded-top mt-5" id="zero-pad">
              <div className="row d-flex justify-content-center">
                  <div className="col-lg-10 col-12 pt-3">
                      <div className="d-flex flex-column pt-4 mb-3">
                          <div><h5 className="text-uppercase font-weight-normal">Carrito de compras</h5></div>
                      </div>
                      <div className="d-flex flex-row px-lg-5 mx-lg-5 mobile" id="heading">
                          <div className="px-lg-5 mr-lg-5" id="produc">PRODUCTS</div>
                          <div className="px-lg-5 ml-lg-5" id="prc">PRICE</div>
                          <div className="px-lg-5 ml-lg-1" id="quantity">AMOUNT</div>
                          <div className="px-lg-5 ml-lg-3" id="total">TOTAL</div>
                      </div>

                      {cartItems.map((item)=>(
                      <div className="d-flex flex-row justify-content-between align-items-center pt-lg-4 pt-2 pb-3 border-bottom mobile">
                          <div className="d-flex flex-row align-items-center">
                              <div><img src={item.img} width="150" height="150" alt="" id="image"/></div>
                              <div className="d-flex flex-column pl-md-3 pl-1">
                                  <div><h6>{item.name}</h6></div>
                                  <div>Color:<span className="pl-3">White</span></div>
                                  <div>Size:<span className="pl-4"> M</span></div>
                              </div>                    
                          </div>
                          <div className="pl-md-0 pl-1"><b>${item.price}</b></div>
                          <div className="pl-md-0 pl-2">
                              <span className="fa fa-minus-square text-secondary"></span><span className="px-md-3 px-1">{item.amount}</span><span className="fa fa-plus-square text-secondary"></span>
                          </div>
                          <div className="pl-md-0 pl-1"><b>${item.price * item.amount}</b></div>
                          <button className="btn-close" onClick={() => removeFromCart(item.id)}></button>
                      </div>
                      ))}
                  </div>
              </div>
          </div>
          <div className="container bg-light rounded-bottom py-4" id="zero-pad">
              <div className="row d-flex justify-content-center">
                  <div className="col-lg-10 col-12">
                      <div className="d-flex justify-content-between align-items-center">
                          <div>
                              <button className="btn btn-sm bg-light border border-dark" onClick={clearCart}>CLEAR</button>
                          </div>
                          <div className="px-md-0 px-1" id="footer-font">
                              <b className="pl-md-4">SUBTOTAL ${totalPrice}</b>
                          </div>
                          <div>
                              <button className="btn btn-sm bg-dark text-white px-lg-5 px-3">CONTINUE</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </>

    );
 
}
export default Cart;

{/* <>
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
</> */}