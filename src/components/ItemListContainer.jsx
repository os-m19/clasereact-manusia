import ClickTracker from "./ItemCount";

const ItemListContainer = ({ itemName }) => {
    return (
    <>
      <hr />
      <h3>{itemName}</h3>
      <ClickTracker/>
      <br />
      <button>Agregar al carrito</button>
    </>
    );
  };
  
  export default ItemListContainer;