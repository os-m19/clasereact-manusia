import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap"
import ItemListContainer from "./components/ItemListContainer";
import Title from './components/Title';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App() {
  const dataStore = {
    title: "GREEk",
    amount: 2,
    itemName: "Camisa",
  };
  return (
    <>
    <BrowserRouter>
      <NavBar title={dataStore.title} />
      {/* <Title/> */}
      <Routes>
        <Route index element={<ItemListContainer/>}/>
        <Route path="/category/:typeID" element={<ItemListContainer/>}/>
        <Route path="item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}


export default App;