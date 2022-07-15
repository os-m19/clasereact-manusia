const Item = ({name, type, price, img}) => {
    return ( 
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <img src={img} style={{width: "55px"}} alt="" />
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{type}</p>
                <p className="card-text">{price}</p>
                <a href="#" className="btn btn-primary">Más info</a>
            </div>
        </div>
     );
}

 
export default Item;