import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import itemDatabase from "./itemDatabase.json"


const ItemDetailContainer = ({setAmountItems}) => {
    const itemDetails = itemDatabase
    const [item, setItem] = useState({});
    const params = useParams();

    const promise = new Promise((res, rej) => {
        setTimeout(() => res(itemDetails), 2000);
      });
    
      useEffect(() => {
        promise.then((response) => {
          const foundItem = response.filter((item) => item.id == params.id);
          setItem(foundItem[0]);
        });
      }, []);

    return ( 
        <ItemDetail setAmountItems={setAmountItems} item={item} />
    )
}
 
export default ItemDetailContainer;