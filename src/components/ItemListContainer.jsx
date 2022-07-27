import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import {useParams} from "react-router-dom";
import itemDatabase from "./itemDatabase.json"


const ItemListContainer = (props) => {
  const itemsDATABASE = itemDatabase
  const {typeID} = useParams()

  const [items, setItems] = useState([]);

  useEffect(
    () => {
      const promiseItems = new Promise((resolve, reject) => {
        setTimeout(
          () => {
            resolve(itemsDATABASE);
           },
        2000);
      });
      promiseItems.then(
        (respuesta) => {
          const products = respuesta;
          setItems (itemsDATABASE);
          if (typeID){
            setItems(products.filter((product) => product.typeID == typeID));
          }else{
            setItems(products)
          }
        }
      )
    },
    [typeID]
  )

  return (
    <>
      <h2 className="text-center mt-5 mb-5 display-3"><strong>Catálogo</strong></h2>
      <div className='row justify-content-center mb-5'>
        <ItemList items={items}/>
      </div>  
    </>
  );
};
  
  export default ItemListContainer;