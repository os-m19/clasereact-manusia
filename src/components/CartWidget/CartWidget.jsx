import { Link } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const CartWidget = () => {
    const amount = 0;
    return (
      <div className="ps-4">
        <Link to="/cart" className="text-decoration-none">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="ps-2 text-decoration-none">{amount}</span>
        </Link>
      </div>
    );
  };
  
  export default CartWidget;