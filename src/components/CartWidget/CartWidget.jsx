import { Link } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const CartWidget = ({amountItems}) => {
    const {cartItems} = useContext(CartContext)

    if (cartItems.length === 0)
    return <></>
    
    return (
      <div className="ps-4">
        <Link to="/cart" className="text-decoration-none">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="ps-2 text-decoration-none">{cartItems.length}</span>
        </Link>
      </div>
    );
  };
  
  export default CartWidget;