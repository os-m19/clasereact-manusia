import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';


const ItemListContainer = (props) => {
  const itemsDATABASE = [
    {
      id: 1,
      name: "Zeus",
      type: "Remera",
      price: "$2000",
      stock: 10,
      img: "/imgs/blanca.jpeg",
    },

    {
      id: 2,
      name: "Poseidon",
      type: "Remera",
      price: "$2000",
      stock: 10,
      img: "/imgs/negra.jpeg",
    },
    {
      id: 3,
      name: "Hércules",
      type: "Remera",
      price: "$2000",
      stock: 10,
      img: "/imgs/gris.jpeg",
    },
  ]

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
          setItems (itemsDATABASE);
        }
      )
    },
    []
  )
  

  



  return (
    <>
      <ItemList items={items}/>
    </>
  );
};
  
  export default ItemListContainer;