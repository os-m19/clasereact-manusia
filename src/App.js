import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap"
import ItemListContainer from "./components/ItemListContainer";
// import Title from './components/Title';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {useState} from "react"
import CartProvider from './contexts/CartContext';
import Cart from './components/Cart';

function App() {
  const [amountItems, setAmountItems] = useState(0);
  const dataStore = {
    title: "GREEk",
    amount: 2,
    itemName: "Camisa",
  };
  return (
    <>
      <CartProvider>
        <BrowserRouter>
            <NavBar title={dataStore.title} amountItems={amountItems} />
          <Routes>
            <Route index element={<ItemListContainer/>}/>
            <Route path="/category/:typeID" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer setAmountItems={setAmountItems} />} />
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}


export default App;