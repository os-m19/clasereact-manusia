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
      <ItemList items={items}/>
    </>
  );
};
  
  export default ItemListContainer;

/* 
<Link to={"/nav"}

Ruta con parametros
<Route path="/category/:type" />

Hook
import {useParams} from "react-router-dom"

const {type} = useParams()

const [items, setItems] = useState([]);

useEffect(
  () => {
    const promiseItems = new Promise((resolve, reject) => {
      setTimeout(
        () => {
          resolve(itemDetailExample);
          },
      2000);
    });
    promiseItems.then(
      (respuesta) => {
        const products= respuesta;
        if (type){
          setItems (itemDetailExample.filter(product=> product.type));
        }else{
          setItems(products)
        }
      }
    )
  },
  [name]
)
return ( 
    items.map(
        cadaItem => <ItemDetail key={cadaItem.id} name={cadaItem.name} type={cadaItem.type} price={cadaItem.price} img={cadaItem.img} stock={cadaItem.stock} info={cadaItem.info}/>
    )
)

const {id} = useParams()
<Route path="/details/:id" />

*/ 
