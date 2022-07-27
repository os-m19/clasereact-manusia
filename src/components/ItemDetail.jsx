import {useState} from "react"
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";


const ItemDetail = ({item}) => {

    const [amount, setAmount] = useState(0);
    const { name, price, stock, img, type, info } = item;
    const onAdd =(amount) => {
        setAmount ( amount);
    }
    return ( <>
     <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={img} alt="..." /></div>
                    <div className="col-md-6">
                        <h4 className="medium mb-1">{type}</h4>
                        <h1 className="display-5 fw-bolder">{name}</h1>
                        <div className="fs-5 mb-5">
                            {/* <span className="text-decoration-line-through">$2200</span> */}
                            <span>{price}</span>
                        </div>
                        <p className="lead">{info}</p>
                        <div className="d-flex">
                            {/* <input className="form-control text-center me-3" id="inputQuantity" type="num" defaultValue="1" style={{maxWidth: "3rem"}} />
                            <button className="btn btn-outline-dark flex-shrink-0" type="button">
                                <i className="bi-cart-fill me-1"></i>
                                Add to cart
                            </button> */}
                            {amount == 0 ? <ItemCount stock={stock} initial={0} onAdd={onAdd}/> : <h1>{amount} artículos añadidos</h1> }
                            
                        </div>
                        <div className="d-flex">
                            <p className="mt-3" style={{color: "green"}}>Available stock: {stock}</p>
                        </div>
                        <Link to="/cart"><button className="btn btn-icon btn-primary">Ir al carrito</button></Link>
                    </div>
                </div>
            </div>
        </section>
    </> );
}
 
export default ItemDetail