import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
      const itemDetailExample = [
    {
      id: 1,
      name: "Zeus",
      type: "Remera",
      price: 2000,
      stock: 10,
      img: "/imgs/blanca.jpeg",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero"
    },

    // {
    //   id: 2,
    //   name: "Poseidon",
    //   type: "Remera",
    //   price: "$2000",
    //   stock: 10,
    //   img: "/imgs/negra.jpeg",
    // },
    // {
    //   id: 3,
    //   name: "Hércules",
    //   type: "Remera",
    //   price: "$2000",
    //   stock: 10,
    //   img: "/imgs/gris.jpeg",
    // },
  ]
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
            setItems (itemDetailExample);
          }
        )
      },
      []
    )
    return ( 
        items.map(
            cadaItem => <ItemDetail key={cadaItem.id} name={cadaItem.name} type={cadaItem.type} price={cadaItem.price} img={cadaItem.img} stock={cadaItem.stock} info={cadaItem.info}/>
        )
    )
}
 
export default ItemDetailContainer;