import React from "react";
import Item from "./Item";

const ItemList = (props) => {
    return ( 
        <>
            <h2 className="text-center mt-5 mb-5 display-3"><strong>Catálogo</strong></h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-4 ms-5">
                {
                    props.items.map(
                        cadaItem => <Item key={cadaItem.id} id={cadaItem.id} name={cadaItem.name} type={cadaItem.type} price={cadaItem.price} img={cadaItem.img}/>
                    )
                }
            </div>
        </> 
    );
}
 
export default ItemList;