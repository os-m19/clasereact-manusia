import React from "react";
import Item from "./Item";

const ItemList = (props) => {
    console.log("render item list", props.items)
    return ( 
        <>
            <h2>Item List</h2>
            {
                props.items.map(
                    cadaItem => <Item key={cadaItem.id} name={cadaItem.name} type={cadaItem.type} price={cadaItem.price} img={cadaItem.img}/>
                )
            }
        </> 
    );
}
 
export default ItemList;