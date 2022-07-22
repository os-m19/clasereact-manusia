import { Link } from "react-router-dom";

const Item = ({id, name, type, price, img}) => {
    return ( 
        <div className="col">
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <img src={img} style={{width: "80px", height: "100px"}} alt="" />
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{type}</p>
                    <p className="card-text">{price}</p>
                    <Link to={`/item/${id}`}>
                        <button className="btn btn-primary">Más info</button>
                    </Link>
                </div>
            </div>
        </div>
     );
}

 
export default Item;